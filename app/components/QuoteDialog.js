'use client';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Icon } from './index';

export default function QuoteDialog({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    // Contact Information
    fullName: '',
    email: '',
    phone: '',
    company: '',
    
    // Service Type
    serviceType: '',
    
    // Cargo Details
    cargoType: '',
    cargoDescription: '',
    weight: '',
    weightUnit: 'kg',
    dimensions: {
      length: '',
      width: '',
      height: ''
    },
    dimensionUnit: 'cm',
    
    // Route Information
    origin: '',
    destination: '',
    
    // Timeline
    urgency: '',
    preferredDate: '',
    
    // Special Requirements
    specialRequirements: [],
    additionalNotes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 4;

  // Welcome toast when dialog opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        toast('Welcome! Let\'s get you a custom quote 🛩️', {
          duration: 3000,
          icon: '👋',
          style: {
            background: '#0d9488',
            color: '#fff',
          },
        });
      }, 500);
    }
  }, [isOpen]);

  // Reset form when dialog closes
  const handleClose = () => {
    setCurrentStep(1);
    setIsSubmitting(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      cargoType: '',
      cargoDescription: '',
      weight: '',
      weightUnit: 'kg',
      dimensions: { length: '', width: '', height: '' },
      dimensionUnit: 'cm',
      origin: '',
      destination: '',
      urgency: '',
      preferredDate: '',
      specialRequirements: [],
      additionalNotes: ''
    });
    onClose();
  };

  const serviceTypes = [
    { id: 'air-cargo', name: 'Air Cargo Transport', icon: 'package' },
    { id: 'aircraft-charter', name: 'Aircraft Chartering', icon: 'airplane' },
    { id: 'defense-logistics', name: 'Defense & Aerospace Logistics', icon: 'shield' },
    { id: 'cold-chain', name: 'Cold Chain Logistics', icon: 'thermometer' },
    { id: 'oversized-cargo', name: 'Over-dimensional Cargo', icon: 'truck' },
    { id: 'time-critical', name: 'Time-Critical Delivery', icon: 'clock' }
  ];

  const cargoTypes = [
    'General Cargo',
    'Hazardous Materials',
    'Perishable Goods',
    'High-Value Items',
    'Automotive Parts',
    'Electronics',
    'Medical Supplies',
    'Defense Equipment',
    'Industrial Machinery',
    'Other'
  ];

  const urgencyLevels = [
    { id: 'standard', name: 'Standard (5-7 days)', color: 'text-green-600' },
    { id: 'priority', name: 'Priority (2-4 days)', color: 'text-yellow-600' },
    { id: 'urgent', name: 'Urgent (24-48 hours)', color: 'text-orange-600' },
    { id: 'emergency', name: 'Emergency (Same day)', color: 'text-red-600' }
  ];

  const specialRequirementOptions = [
    'Temperature Controlled',
    'Hazardous Materials Certified',
    'Security Escort Required',
    'White Glove Service',
    'Weekend Delivery',
    'Insurance Coverage',
    'Real-time Tracking',
    'Custom Packaging'
  ];

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSpecialRequirementToggle = (requirement) => {
    setFormData(prev => ({
      ...prev,
      specialRequirements: prev.specialRequirements.includes(requirement)
        ? prev.specialRequirements.filter(r => r !== requirement)
        : [...prev.specialRequirements, requirement]
    }));
  };

  const handleNext = () => {
    // Validation for each step
    if (currentStep === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        toast.error('Please fill in all required fields (Name, Email, Phone)');
        return;
      }
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error('Please enter a valid email address');
        return;
      }
    }
    
    if (currentStep === 2) {
      if (!formData.serviceType) {
        toast.error('Please select a service type');
        return;
      }
    }
    
    if (currentStep === 3) {
      if (!formData.origin || !formData.destination || !formData.cargoType || !formData.weight || !formData.urgency) {
        toast.error('Please fill in all required cargo details');
        return;
      }
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      toast.success(`Step ${currentStep + 1} completed! ✓`, {
        duration: 2000,
        icon: '✅',
      });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading('Sending your quote request to our logistics team...');

    try {
      // Send quote request to API
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        console.log('Quote Request sent successfully:', formData);
        
        // Success notification
        toast.success(
          `🎉 Quote request sent successfully!\n📧 We'll contact you within 2 hours at ${formData.email}\n✈️ Our logistics experts are reviewing your requirements!`,
          {
            duration: 8000,
            style: {
              minWidth: '350px',
            },
          }
        );

        // Reset form and close dialog
        setTimeout(() => {
          handleClose();
        }, 1500);
      } else {
        // console.log('Error sending quote request:', result);
        throw new Error(result.message || 'Failed to send quote request');
      }

    } catch (error) {
      console.error('Quote submission error:', error);
      
      // Error notification
      toast.error(
        `❌ Failed to send quote request.\n🔄 Please check your connection and try again.\n💬 Or contact us directly at roshan555routh@gmail.com`,
        {
          duration: 8000,
          style: {
            minWidth: '300px',
          },
        }
      );
    } finally {
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      {/* Dialog */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-3xl h-[80vh] bg-white rounded-md shadow-2xl transform transition-all flex flex-col">
          {/* Header - Fixed */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Request a Quote</h2>
              <p className="text-gray-600 text-sm mt-1">Get a customized quote for your aviation logistics needs</p>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Icon name="x" className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Progress Bar - Fixed */}
          <div className="px-4 py-3 bg-gray-50 flex-shrink-0">
            <div className="flex items-center justify-center">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    i + 1 <= currentStep 
                      ? 'bg-aviation-teal text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {i + 1}
                  </div>
                  {i < totalSteps - 1 && (
                    <div className={`w-16 h-0.5 mx-3 ${
                      i + 1 < currentStep ? 'bg-aviation-teal' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content Area - Scrollable */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="p-4 h-full">
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-4 h-full flex flex-col justify-center">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-3">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                          placeholder="+91 9999999999"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Service Type */}
              {currentStep === 2 && (
                <div className="space-y-4 h-full flex flex-col justify-center">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-3">Select Service Type</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceTypes.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => handleInputChange('serviceType', service.id)}
                          className={`p-3 border-2 rounded-md cursor-pointer transition-all hover:shadow-md ${
                            formData.serviceType === service.id
                              ? 'border-aviation-teal bg-aviation-teal/5 shadow-sm'
                              : 'border-gray-200 hover:border-aviation-teal/50'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <Icon name={service.icon} className="w-6 h-6 text-aviation-teal" />
                            <div>
                              <h4 className="font-medium text-gray-900 text-sm">{service.name}</h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Cargo Details */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">Cargo Details</h3>
                  
                  {/* Route Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Origin *</label>
                      <input
                        type="text"
                        required
                        value={formData.origin}
                        onChange={(e) => handleInputChange('origin', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                        placeholder="City, Country"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Destination *</label>
                      <input
                        type="text"
                        required
                        value={formData.destination}
                        onChange={(e) => handleInputChange('destination', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  {/* Cargo Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cargo Type *</label>
                    <select
                      required
                      value={formData.cargoType}
                      onChange={(e) => handleInputChange('cargoType', e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                    >
                      <option value="">Select cargo type</option>
                      {cargoTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Weight and Urgency */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Weight *</label>
                      <div className="flex space-x-2">
                        <input
                          type="number"
                          required
                          value={formData.weight}
                          onChange={(e) => handleInputChange('weight', e.target.value)}
                          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                          placeholder="0"
                        />
                        <select
                          value={formData.weightUnit}
                          onChange={(e) => handleInputChange('weightUnit', e.target.value)}
                          className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                        >
                          <option value="kg">kg</option>
                          <option value="lbs">lbs</option>
                          <option value="tons">tons</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Urgency Level *</label>
                      <select
                        required
                        value={formData.urgency}
                        onChange={(e) => handleInputChange('urgency', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                      >
                        <option value="">Select urgency</option>
                        {urgencyLevels.map((level) => (
                          <option key={level.id} value={level.id}>{level.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dimensions (L × W × H)</label>
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        value={formData.dimensions.length}
                        onChange={(e) => handleInputChange('dimensions.length', e.target.value)}
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                        placeholder="Length"
                      />
                      <span className="flex items-center text-gray-500 text-sm">×</span>
                      <input
                        type="number"
                        value={formData.dimensions.width}
                        onChange={(e) => handleInputChange('dimensions.width', e.target.value)}
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                        placeholder="Width"
                      />
                      <span className="flex items-center text-gray-500 text-sm">×</span>
                      <input
                        type="number"
                        value={formData.dimensions.height}
                        onChange={(e) => handleInputChange('dimensions.height', e.target.value)}
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                        placeholder="Height"
                      />
                      <select
                        value={formData.dimensionUnit}
                        onChange={(e) => handleInputChange('dimensionUnit', e.target.value)}
                        className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                      >
                        <option value="cm">cm</option>
                        <option value="m">m</option>
                        <option value="in">in</option>
                        <option value="ft">ft</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requirements */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                    <div className="grid grid-cols-2 gap-2">
                      {specialRequirementOptions.map((requirement) => (
                        <label key={requirement} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.specialRequirements.includes(requirement)}
                            onChange={() => handleSpecialRequirementToggle(requirement)}
                            className="w-3 h-3 text-aviation-teal border-gray-300 rounded focus:ring-aviation-teal"
                          />
                          <span className="text-xs text-gray-700">{requirement}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                    <textarea
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                      rows="2"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-aviation-teal focus:border-transparent"
                      placeholder="Any special instructions..."
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">Review Your Request</h3>
                  
                  <div className="bg-gray-50 rounded-md p-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Contact Information</h4>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>{formData.fullName}</p>
                          <p>{formData.email}</p>
                          <p>{formData.phone}</p>
                          {formData.company && <p>{formData.company}</p>}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Service</h4>
                        <p className="text-xs text-gray-600">
                          {serviceTypes.find(s => s.id === formData.serviceType)?.name || 'Not selected'}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Route</h4>
                        <p className="text-xs text-gray-600">{formData.origin} → {formData.destination}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Cargo Details</h4>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>{formData.cargoType}</p>
                          <p>{formData.weight} {formData.weightUnit}</p>
                          {formData.dimensions.length && (
                            <p>
                              {formData.dimensions.length} × {formData.dimensions.width} × {formData.dimensions.height} {formData.dimensionUnit}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {formData.specialRequirements.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Special Requirements</h4>
                        <p className="text-xs text-gray-600">{formData.specialRequirements.join(', ')}</p>
                      </div>
                    )}

                    {formData.additionalNotes && (
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Additional Notes</h4>
                        <p className="text-xs text-gray-600">{formData.additionalNotes}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-aviation-teal/10 border border-aviation-teal/20 rounded-md p-3">
                    <div className="flex items-start space-x-2">
                      <Icon name="info" className="w-4 h-4 text-aviation-teal mt-0.5" />
                      <div>
                        <h4 className="font-medium text-aviation-teal text-sm mb-1">What happens next?</h4>
                        <ul className="text-xs text-aviation-teal/80 space-y-1">
                          <li>• Our logistics experts will review your requirements</li>
                          <li>• You`&apos;`ll receive a detailed quote within 2 hours</li>
                          <li>• We`&apos;`ll schedule a call to discuss your specific needs</li>
                          <li>• Get access to real-time tracking and dedicated support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons - Fixed */}
          <div className="flex justify-between p-4 border-t border-gray-200 flex-shrink-0">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 bg-aviation-teal text-white rounded-md font-medium text-sm hover:bg-aviation-teal/90 transition-all"
              >
                Next Step
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-all flex items-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-aviation-teal hover:bg-aviation-teal/90'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Quote Request</span>
                    <Icon name="arrow-right" className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}