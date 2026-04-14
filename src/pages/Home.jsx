import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { 
  CheckCircle2, 
  Globe, 
  Award, 
  Factory, 
  Users, 
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { toast } from 'sonner';

const Home = () => {
  const [state, handleSubmit] = useForm('mjgjvven');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  React.useEffect(() => {
    if (state.succeeded) {
      toast.success('Thank you! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }
  }, [state.succeeded]);

  React.useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      toast.error('Failed to send message. Please email us directly at walletsplus@gmail.com');
    }
  }, [state.errors]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="https://www.maharya.com" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" 
                  src="https://cdn.prod.website-files.com/66892da993ba92c0c571f33e/668963c28457c4eea62ab8fa_maharya%20logo.svg"
                  alt="Maharya"
                  className="h-8 md:h-10"
                />
              </a>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#manufacturing" className="text-stone-700 hover:text-stone-900 transition-colors">Manufacturing</a>
              <a href="#capabilities" className="text-stone-700 hover:text-stone-900 transition-colors">Capabilities</a>
              <a href="#why-us" className="text-stone-700 hover:text-stone-900 transition-colors">Why Us</a>
              <a href="#contact" className="text-stone-700 hover:text-stone-900 transition-colors">Contact</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <a href="tel:+1-917-730-4220" className="hidden md:block">
                <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  +1-917-730-4220
                </Button>
              </a>
              
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-stone-700" />
                ) : (
                  <Menu className="w-6 h-6 text-stone-700" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <nav className="px-4 py-4 space-y-3">
              <a 
                href="#manufacturing" 
                className="block py-2 text-stone-700 hover:text-stone-900 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Manufacturing
              </a>
              <a 
                href="#capabilities" 
                className="block py-2 text-stone-700 hover:text-stone-900 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Capabilities
              </a>
              <a 
                href="#why-us" 
                className="block py-2 text-stone-700 hover:text-stone-900 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <a 
                href="#contact" 
                className="block py-2 text-stone-700 hover:text-stone-900 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a href="tel:+1-917-730-4220" className="block">
                <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white mt-2">
                  <Phone className="w-4 h-4 mr-2" />
                  +1-917-730-4220
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/4452610/pexels-photo-4452610.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop&q=60"
            alt="Leather craftsmanship"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-stone-800/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Sustainable Leather Accessories Manufacturing
            <span className="block text-amber-500 mt-2">For Global Brands</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-3xl mx-auto">
            27 years of eco-friendly, ethical leather accessories production. Serving brands worldwide with certified sustainable manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-8 py-6">
                Request a Quote
              </Button>
            </a>
            <a href="#capabilities">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                View Capabilities
              </Button>
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
            <div className="text-white text-center">
              <p className="text-sm font-semibold mb-1">WRAP Certified</p>
            </div>
            <div className="text-white text-center">
              <p className="text-sm font-semibold mb-1">C-TPAT</p>
            </div>
            <div className="text-white text-center">
              <p className="text-sm font-semibold mb-1">SEDEX SMETA</p>
            </div>
            <div className="text-white text-center">
              <p className="text-sm font-semibold mb-1">ISO 9001/45001</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(123,63,0)] mb-2">27+</div>
              <div className="text-stone-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(123,63,0)] mb-2">30K+</div>
              <div className="text-stone-600 font-medium">Units/Month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(123,63,0)] mb-2">100+</div>
              <div className="text-stone-600 font-medium">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(123,63,0)] mb-2">25+</div>
              <div className="text-stone-600 font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      <section id="manufacturing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Sustainable Leather Accessories Manufacturing
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Eco-Friendly Private Label • Ethical OEM Production • Sustainable Corporate Gifting • Small & Large Runs
            </p>
            <p className="text-lg text-[rgb(123,63,0)] font-semibold mt-4">
              Certified Sustainable Manufacturing since 1999
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-stone-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <img loading="lazy" 
                  src="https://images.unsplash.com/photo-1534126511673-b6899657816a?w=800&h=600&q=75&auto=format&fit=crop"
                  alt="Sustainable leather craftsmanship with eco-friendly practices"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  width="800"
                  height="600"
                />
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Eco-Friendly Craftsmanship</h3>
                <p className="text-stone-600 leading-relaxed">
                  Skilled artisans using vegetable-tanned leather and sustainable practices, ensuring exceptional quality with minimal environmental impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <img loading="lazy" 
                  src="https://images.unsplash.com/photo-1660980041852-230420b8f99f?w=800&h=600&q=75&auto=format&fit=crop"
                  alt="Certified sustainable manufacturing facility"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  width="800"
                  height="600"
                />
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Certified Green Facility</h3>
                <p className="text-stone-600 leading-relaxed">
                  10,000 sq ft WRAP, C-TPAT, SEDEX & ISO certified factory with energy-efficient German and Italian equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <img loading="lazy" 
                  src="https://images.unsplash.com/photo-1599694522028-65abc96dfd2f?w=800&h=600&q=75&auto=format&fit=crop"
                  alt="Sustainable quality control process - leather inspection"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  width="800"
                  height="600"
                />
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Ethical Quality Assurance</h3>
                <p className="text-stone-600 leading-relaxed">
                  Six-stage quality control with fair labor practices, ensuring both product excellence and worker welfare.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Sustainable Manufacturing Capabilities
            </h2>
            <p className="text-xl text-stone-600">
              Eco-friendly leather accessories crafted with vegetable-tanned leather
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-lg">
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1517612228538-cefdbc2c01e7?w=900&h=1000&q=75&auto=format&fit=crop"
                alt="Sustainable leather business bags - eco-friendly manufacturing"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                width="900"
                height="1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Business Bags</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1531190260877-c8d11eb5afaf?w=900&h=1000&q=75&auto=format&fit=crop"
                alt="Sustainable leather wallets and small goods"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                width="900"
                height="1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Wallets & Small Goods</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=900&h=1000&q=75&auto=format&fit=crop"
                alt="Sustainable leather belts and accessories"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                width="900"
                height="1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Belts & Accessories</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Eco-Friendly Private Labels',
              'Sustainable OEM Production',
              'Green Corporate Gifting',
              'Custom Sustainable Designs',
              'Ethical Small Batch Production',
              'Large Scale Sustainable Manufacturing'
            ].map((capability, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-stone-200">
                <CheckCircle2 className="w-6 h-6 text-[rgb(123,63,0)] flex-shrink-0" />
                <span className="text-stone-800 font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Why Global Brands Choose Maharya
            </h2>
            <p className="text-xl text-stone-600">
              Trusted manufacturing partner for businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-stone-200">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-[rgb(123,63,0)]" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Certified Excellence</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  WRAP, C-TPAT, SEDEX SMETA 4-Pillar & ISO 9001/45001 certified facility ensuring highest standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-[rgb(123,63,0)]" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Global Presence</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  U.S. registered corporation serving clients worldwide across North America, Europe, Asia, and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <Factory className="w-8 h-8 text-[rgb(123,63,0)]" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Production Capacity</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  30,000+ units per month capacity with state-of-the-art German and Italian manufacturing equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-[rgb(123,63,0)]" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Sustainable Practices</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Committed to environmental responsibility, fair trade, and ethical manufacturing with vegetable-tanned leather.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-[rgb(123,63,0)]" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Expert Team</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Skilled artisans whose families have been in the leather trade for generations, ensuring authentic craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[rgb(123,63,0)]" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Quality Guarantee</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Six-stage quality control process with strict compliance to customer design and packaging specifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
                Let's Bring Your Designs to Life
              </h2>
              <p className="text-xl text-stone-600 mb-8">
                Contact us for a quote for your leather accessory designs or retail inquiries. Our team is ready to discuss your manufacturing needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[rgb(123,63,0)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 mb-1">U.S. Office</h3>
                    <p className="text-stone-600">418 Broadway #6782, Albany, NY 12207, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[rgb(123,63,0)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 mb-1">Phone</h3>
                    <p className="text-stone-600">+1-917-730-4220</p>
                    <p className="text-stone-600">+91-33-2414-1992 (India)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[rgb(123,63,0)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 mb-1">Email</h3>
                    <p className="text-stone-600">contact@maharya.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-stone-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-6">Request a Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-stone-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-stone-300"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="border-stone-300"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-stone-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border border-stone-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
                      >
                        <option value="">Select a service</option>
                        <option value="private-label">Private Labeling</option>
                        <option value="oem">OEM Production</option>
                        <option value="corporate-gifting">Corporate Gifting</option>
                        <option value="custom-design">Custom Designs</option>
                        <option value="manufacturing">Manufacturing Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="border-stone-300"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={state.submitting}
                      className="w-full bg-amber-700 hover:bg-amber-800 text-white py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="https://www.maharya.com" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" 
                  src="https://cdn.prod.website-files.com/66892da993ba92c0c571f33e/668963c28457c4eea62ab8fa_maharya%20logo.svg"
                  alt="Maharya"
                  className="h-8 mb-4 brightness-0 invert"
                />
              </a>
              <p className="text-stone-400">
                Premium leather accessories manufacturer serving global brands since 1999.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-stone-400">
                <li>Private Labeling</li>
                <li>OEM Production</li>
                <li>Corporate Gifting</li>
                <li>Custom Manufacturing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-stone-400">
                <li>About Us</li>
                <li>Certifications</li>
                <li>Sustainability</li>
                <li>Quality Standards</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-stone-400">
                <li>+1-917-730-4220</li>
                <li>contact@maharya.com</li>
                <li>Albany, NY, USA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-stone-400">
            <p>&copy; 2026 Maharya Inc. All rights reserved. | WRAP • C-TPAT • SEDEX • ISO Certified</p>
            <p className="mt-2">
              <a href="https://www.maharya.com" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-700 transition-colors">
                www.maharya.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;









