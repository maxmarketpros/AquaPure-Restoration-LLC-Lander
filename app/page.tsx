"use client"

import type React from "react"

import Image from "next/image"
import {
  Phone,
  CheckCircle,
  Clock,
  Shield,
  Droplets,
  Home,
  Wind,
  Wrench,
  AlertTriangle,
  Users,
  FileText,
  MapPin,
  ChevronDown,
} from "lucide-react"
import { useState } from "react"
import Script from "next/script"

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    damageType: "",
    when: "",
    waterPresent: "",
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://aquapurerestoration.com",
    name: "AquaPure Restoration",
    image: "https://aquapurerestoration.com/images/logo.webp",
    logo: "https://aquapurerestoration.com/images/logo.webp",
    description:
      "Fast emergency water removal and flood cleanup services in Catawba, NC. With over 20 years of experience, AquaPure Restoration provides free inspections and detailed quotes.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Catawba",
      addressLocality: "Catawba",
      addressRegion: "NC",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.43408595",
      longitude: "-81.01908745",
    },
    url: "https://aquapurerestoration.com",
    telephone: "+18285685570",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "35.43408595",
        longitude: "-81.01908745",
      },
      geoRadius: "50000",
    },
    serviceType: [
      "Water Damage Restoration",
      "Emergency Water Removal",
      "Flood Cleanup",
      "Mold Remediation",
      "Water Extraction",
      "Structural Drying",
      "Basement Water Removal",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Water Damage Restoration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Water Removal & Extraction",
            description: "24/7 emergency water removal with industrial-grade water extraction services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flood Damage & Flood Cleanup Services",
            description: "Expert flood cleanup services and flood damage restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mold Inspection & Mold Remediation",
            description: "Professional mold inspection and complete mold remediation services",
          },
        },
      ],
    },
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* STICKY HEADER */}
        <header className="md:sticky md:top-0 md:z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center">
                <Image
                  src="/images/logo.webp"
                  alt="AquaPure Restoration logo"
                  width={360}
                  height={120}
                  className="h-24 w-auto"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0077C8]" />
                  Open 24/7 • Emergency Response
                </span>
                <a
                  href="tel:18285685570"
                  className="inline-flex items-center gap-2 bg-[#004080] hover:bg-[#003366] text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  (828) 568-5570
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* HERO SECTION */}
          <section className="bg-[#F5F7FA] py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Column */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2933] leading-tight text-balance">
                    24/7 Water Damage Restoration in Catawba, NC
                  </h1>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    Fast emergency water removal and flood cleanup services when you need them most. With over 20 years
                    of experience, AquaPure Restoration provides free inspections and detailed quotes. Most homeowners
                    insurance policies typically cover water damage restoration services, and we're here to help you
                    navigate the process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:18285685570"
                      className="inline-flex items-center justify-center gap-2 bg-[#004080] hover:bg-[#003366] text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
                    >
                      <Phone className="w-5 h-5" />
                      (828) 568-5570
                    </a>
                    <button
                      onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#004080] font-bold px-8 py-4 rounded-lg transition-colors shadow-lg border-2 border-[#004080] text-lg"
                    >
                      Request Free Inspection
                    </button>
                  </div>
                  <div className="pt-4 space-y-2 text-sm text-[#6B7280]">
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0E0]" />
                      Local restoration company • 20+ Years of Experience
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0E0]" />
                      Free on-site inspections & detailed estimates
                    </p>
                  </div>

                  {/* Trust Icons */}
                  <div className="grid grid-cols-3 gap-4 pt-6">
                    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                      <Clock className="w-8 h-8 text-[#0077C8] mb-2" />
                      <span className="text-xs font-medium text-[#1F2933]">24/7 Emergency Response</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                      <Shield className="w-8 h-8 text-[#0077C8] mb-2" />
                      <span className="text-xs font-medium text-[#1F2933]">Licensed & Insured</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                      <Home className="w-8 h-8 text-[#0077C8] mb-2" />
                      <span className="text-xs font-medium text-[#1F2933]">Residential & Commercial</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Form Card */}
                {/* CHANGE: Moved ID to heading so scroll targets the top of form section */}
                <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 border-t-4 border-[#0077C8]">
                  <h2 id="contact-form" className="text-2xl font-bold text-[#1F2933] mb-3">
                    Need Emergency Water Removal?
                  </h2>
                  <p className="text-[#6B7280] mb-6">
                    Fill out this form and we'll call you back within minutes to schedule your free inspection.
                  </p>
                  <div className="w-full" style={{ minHeight: "760px" }}>
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/x1VHWk9xxF0lgxRxJvZE"
                      style={{ width: "100%", height: "100%", minHeight: "760px", border: "none", borderRadius: "3px" }}
                      id="inline-x1VHWk9xxF0lgxRxJvZE"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="WebSite Form Template"
                      data-height="760"
                      data-layout-iframe-id="inline-x1VHWk9xxF0lgxRxJvZE"
                      data-form-id="x1VHWk9xxF0lgxRxJvZE"
                      title="WebSite Form Template"
                    />
                    <script src="https://link.msgsndr.com/js/form_embed.js" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TRUST BADGES */}
          <section className="bg-white py-8 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-4 bg-[#F5F7FA] rounded-lg">
                  <Users className="w-10 h-10 text-[#0077C8] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1F2933]">Over 20 Years of Restoration Experience</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#F5F7FA] rounded-lg">
                  <FileText className="w-10 h-10 text-[#0077C8] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1F2933]">Free Inspections & Quotes</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#F5F7FA] rounded-lg">
                  <MapPin className="w-10 h-10 text-[#0077C8] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1F2933]">
                    Fast Response in Catawba, NC and Nearby Areas
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#F5F7FA] rounded-lg">
                  <Shield className="w-10 h-10 text-[#0077C8] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1F2933]">
                    Most Homeowners Insurance Policies Accepted
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* BEFORE/AFTER PHOTOS */}
          <section className="py-16 bg-[#F5F7FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
                  Real Water Damage Scenarios We Handle
                </h2>
                <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                  From flood damage to mold remediation, we've seen it all. Our experienced team responds quickly to
                  minimize damage and get your property back to normal.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="/images/4.jpg"
                    alt="Water damage restoration with water extraction equipment removing standing water from flooded floor"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1F2933] mb-2">Emergency Water Extraction</h3>
                    <p className="text-[#6B7280]">
                      Fast response to remove standing water and prevent further damage to your property.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="/images/1.jpg"
                    alt="Homeowner discovering mold and water damage on ceiling requiring mold remediation services"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1F2933] mb-2">Mold Inspection & Remediation</h3>
                    <p className="text-[#6B7280]">
                      Professional mold remediation services to protect your health and property value.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="/images/3.jpg"
                    alt="Professional water damage restoration technicians in protective gear performing flood cleanup services"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1F2933] mb-2">Professional Team Response</h3>
                    <p className="text-[#6B7280]">
                      Trained technicians with specialized equipment for complete water damage restoration.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="/images/2.jpg"
                    alt="Flooded basement and laundry room with standing water requiring emergency flood cleanup services"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1F2933] mb-2">Basement & Flood Damage</h3>
                    <p className="text-[#6B7280]">
                      Expert basement water removal and flood cleanup to save your property and belongings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES SECTION */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
                  Comprehensive Water Damage Restoration Services
                </h2>
                <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                  AquaPure Restoration handles everything from emergency water extraction to full structural drying and
                  repairs. Whether you're dealing with a burst pipe or flood damage, we provide complete water
                  mitigation services for residential and commercial properties.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Service Card 1 */}
                <div className="bg-[#F5F7FA] rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Droplets className="w-12 h-12 text-[#0077C8] mb-4" />
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Emergency Water Removal & Extraction</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    24/7 emergency water removal with industrial-grade water extraction services to stop damage in its
                    tracks.
                  </p>
                </div>

                {/* Service Card 2 */}
                <div className="bg-[#F5F7FA] rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <AlertTriangle className="w-12 h-12 text-[#0077C8] mb-4" />
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Flood Damage & Flood Cleanup Services</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Expert flood cleanup services and flood damage restoration with emergency flood cleanup available
                    around the clock.
                  </p>
                </div>

                {/* Service Card 3 */}
                <div className="bg-[#F5F7FA] rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Home className="w-12 h-12 text-[#0077C8] mb-4" />
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Basement & Crawl Space Water Removal</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Specialized basement water removal and flooded basement cleanup to protect your foundation and lower
                    levels.
                  </p>
                </div>

                {/* Service Card 4 */}
                <div className="bg-[#F5F7FA] rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Wind className="w-12 h-12 text-[#0077C8] mb-4" />
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Mold Inspection & Mold Remediation Services</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Professional mold inspection and complete mold remediation services to ensure a safe, healthy
                    environment.
                  </p>
                </div>

                {/* Service Card 5 */}
                <div className="bg-[#F5F7FA] rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Wrench className="w-12 h-12 text-[#0077C8] mb-4" />
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Ceiling & Wall Water Damage Repair</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Expert ceiling water damage repair and wall restoration to restore your property's structure and
                    appearance.
                  </p>
                </div>

                {/* Service Card 6 */}
                <div className="bg-[#F5F7FA] rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Wind className="w-12 h-12 text-[#0077C8] mb-4" />
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Structural Drying & Dehumidification</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Advanced structural drying services with commercial dehumidifiers to eliminate moisture completely.
                  </p>
                </div>

                {/* Service Card 7 */}
                <div className="bg-[#F5F7FA] rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Droplets className="w-12 h-12 text-[#0077C8] mb-4" />
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Burst Pipe & Plumbing Leak Cleanup</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Fast response to burst pipe water cleanup and plumbing emergencies to minimize water damage.
                  </p>
                </div>

                {/* Service Card 8 */}
                <div className="bg-[#F5F7FA] rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Home className="w-12 h-12 text-[#0077C8] mb-4" />
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Carpet & Flooring Water Damage Restoration</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Professional carpet water damage restoration to save your flooring investments when possible.
                  </p>
                </div>

                {/* Service Card 9 */}
                <div className="bg-[#F5F7FA] rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Users className="w-12 h-12 text-[#0077C8] mb-4" />
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">
                    Residential & Commercial Water Damage Restoration
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Full-service water damage restoration for homes and businesses throughout Catawba, NC.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="py-16 bg-[#F5F7FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
                  Why Homeowners in Catawba Trust AquaPure Restoration
                </h2>
                <p className="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
                  As a local water damage restoration company, we pride ourselves on being available when you need us
                  most. With over 20 years of experience in emergency water removal and flood cleanup services, our team
                  provides fast, clear communication and expert guidance throughout the entire restoration process. We
                  help homeowners navigate insurance claims and understand their coverage options for water mitigation
                  services.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E6F4FB] rounded-full mb-4">
                    <Users className="w-8 h-8 text-[#0077C8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">20+ Years of Experience</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Our skilled technicians use modern water extraction equipment and proven techniques to handle any
                    water damage scenario, from small leaks to major flood damage restoration.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E6F4FB] rounded-full mb-4">
                    <Shield className="w-8 h-8 text-[#0077C8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Insurance-Friendly Process</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Most homeowners insurance policies cover water damage restoration. We provide detailed
                    documentation, photos, and moisture readings to support your insurance claim.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E6F4FB] rounded-full mb-4">
                    <FileText className="w-8 h-8 text-[#0077C8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Honest, Upfront Estimates</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    We offer free inspections and transparent pricing with no hidden fees. You'll know exactly what to
                    expect before we begin any work.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg text-[#6B7280] mb-4">Have questions? We're here to help 24/7.</p>
                <a
                  href="tel:18285685570"
                  className="inline-flex items-center gap-2 bg-[#004080] hover:bg-[#003366] text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call us now at (828) 568-5570
                </a>
              </div>
            </div>
          </section>

          {/* PROCESS SECTION */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
                  Our 24/7 Water Damage Restoration Process
                </h2>
                <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                  Our proven step-by-step process ensures thorough water mitigation services and complete restoration of
                  your property.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#004080] text-white rounded-full text-2xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Call or Request Help</h3>
                  <p className="text-[#6B7280]">
                    We answer 24/7 and gather details about your water damage emergency to dispatch the right team and
                    equipment.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0077C8] text-white rounded-full text-2xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Free On-Site Inspection</h3>
                  <p className="text-[#6B7280]">
                    We inspect affected areas, locate the water source, take moisture readings, and document all damage
                    with photos.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00A0E0] text-white rounded-full text-2xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Water Extraction & Structural Drying</h3>
                  <p className="text-[#6B7280]">
                    We remove standing water, set up industrial air movers and dehumidifiers, and monitor moisture
                    levels daily.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0077C8] text-white rounded-full text-2xl font-bold mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2933] mb-3">Sanitizing, Repairs & Final Walk-Through</h3>
                  <p className="text-[#6B7280]">
                    We clean, deodorize, and coordinate any necessary repairs so your home is safe, dry, and restored.
                  </p>
                </div>
              </div>
              <div className="mt-12 p-6 bg-[#FEF3C7] border-l-4 border-[#F59E0B] rounded-lg">
                <p className="text-[#92400E] font-medium">
                  <strong>Important:</strong> The faster you call, the more we can save. Moisture can lead to mold
                  growth within 24–48 hours, so don't wait—contact us immediately for emergency water removal.
                </p>
              </div>
            </div>
          </section>

          {/* SERVICE AREA */}
          <section className="py-16 bg-[#F5F7FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
                  Serving Catawba, NC and Surrounding Communities
                </h2>
                <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                  AquaPure Restoration LLC is based in Catawba and provides fast emergency water damage restoration
                  across North Carolina. If you searched for "water damage restoration near me" or "water damage repair
                  near me," our local team is ready to respond 24/7.
                </p>
              </div>
              <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-[#0077C8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2933] mb-2">AquaPure Restoration LLC</h3>
                    <p className="text-[#6B7280] mb-1">5159 Bert Dr, Catawba, NC 28609</p>
                    <p className="text-[#6B7280] mb-1">
                      Phone:{" "}
                      <a href="tel:18285685570" className="text-[#0077C8] hover:underline font-medium">
                        (828) 568-5570
                      </a>
                    </p>
                    <p className="text-[#6B7280] mb-1">
                      Email:{" "}
                      <a href="mailto:aquapurerestoration@gmail.com" className="text-[#0077C8] hover:underline">
                        aquapurerestoration@gmail.com
                      </a>
                    </p>
                    <p className="text-[#00A0E0] font-medium mt-2">Open 24/7 for Emergency Water Damage Restoration</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416107.04138223664!2d-81.01908744999999!3d35.43408595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8bf3f4b175fbbfa7%3A0xc1ce938b707c84bb!2saquapure%20restoration!5e0!3m2!1sen!2sus!4v1763684225361!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AquaPure Restoration Location Map"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* INSURANCE SECTION */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
                  Insurance & Coverage: What Homeowners Should Know
                </h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <p className="text-[#6B7280] leading-relaxed">
                    Most homeowners insurance policies typically cover sudden and accidental water damage, such as burst
                    pipes, appliance malfunctions, or storm-related flooding (with appropriate coverage). Understanding
                    your policy can help you make informed decisions during a stressful time.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    AquaPure Restoration provides comprehensive documentation, including moisture readings, photos, and
                    detailed reports to support your insurance claim. We work directly with insurance adjusters to
                    ensure all damage is properly documented according to industry standards.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    While we can explain the restoration process and what's typically covered under standard policies,
                    we do not provide legal or insurance advice. We recommend contacting your insurance provider to
                    understand your specific coverage for water damage restoration services.
                  </p>
                </div>
                <div className="bg-[#F5F7FA] rounded-lg p-8">
                  <h3 className="text-xl font-bold text-[#1F2933] mb-4">How We Help With Insurance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#00A0E0] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7280]">
                        Free inspection with detailed moisture readings and assessments
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#00A0E0] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7280]">Comprehensive photo documentation of all damages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#00A0E0] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7280]">
                        Work directly with your insurer's requirements and adjusters
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#00A0E0] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7280]">
                        Clear explanation of restoration scope and typical coverage (non-legal guidance)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#E6F4FB] border-l-4 border-[#0077C8] rounded-lg p-6">
                <p className="text-[#1F2933] font-medium text-lg">
                  <strong>Important:</strong> Most homeowners insurance policies actually cover the cost of water damage
                  restoration services when the damage is sudden and accidental. Call us at{" "}
                  <a href="tel:18285685570" className="text-[#0077C8] hover:underline">
                    (828) 568-5570
                  </a>{" "}
                  and we can help you understand your options.
                </p>
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="py-16 bg-[#F5F7FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">What Our Customers Say</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#6B7280] mb-4 italic">
                    "They responded within an hour of my call and had our basement dried out in just a few days. Very
                    professional and thorough!"
                  </p>
                  <p className="text-[#1F2933] font-medium">— Homeowner in Catawba</p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#6B7280] mb-4 italic">
                    "Burst pipe at 2 AM and they were at my house in 30 minutes. Saved our hardwood floors! Highly
                    recommend their emergency service."
                  </p>
                  <p className="text-[#1F2933] font-medium">— Property Owner in NC</p>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#6B7280] mb-4 italic">
                    "Great communication throughout the entire process. They helped us with the insurance paperwork and
                    made everything easy during a stressful time."
                  </p>
                  <p className="text-[#1F2933] font-medium">— Local Business Owner</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">Water Damage Restoration FAQs</h2>
              </div>
              <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="bg-[#F5F7FA] rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    aria-expanded={openFaq === 1}
                  >
                    <span className="text-lg font-bold text-[#1F2933]">
                      How fast can you get to my property for emergency water damage?
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-[#0077C8] transition-transform ${openFaq === 1 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === 1 && (
                    <div className="px-6 pb-6">
                      <p className="text-[#6B7280] leading-relaxed">
                        We typically respond within 30-60 minutes for emergency water damage calls in Catawba and
                        surrounding areas. Our 24/7 emergency team is always ready to dispatch with the right equipment
                        to start water extraction immediately.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-[#F5F7FA] rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    aria-expanded={openFaq === 2}
                  >
                    <span className="text-lg font-bold text-[#1F2933]">
                      Do you really offer 24/7 water damage restoration?
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-[#0077C8] transition-transform ${openFaq === 2 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === 2 && (
                    <div className="px-6 pb-6">
                      <p className="text-[#6B7280] leading-relaxed">
                        Yes! Water damage doesn't wait for business hours, and neither do we. Our emergency response
                        team is available 24 hours a day, 7 days a week, 365 days a year. Whether it's 2 AM on a Sunday
                        or a holiday, we'll answer your call and dispatch a crew immediately.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-[#F5F7FA] rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    aria-expanded={openFaq === 3}
                  >
                    <span className="text-lg font-bold text-[#1F2933]">
                      Will my homeowners insurance cover water damage restoration?
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-[#0077C8] transition-transform ${openFaq === 3 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === 3 && (
                    <div className="px-6 pb-6">
                      <p className="text-[#6B7280] leading-relaxed">
                        Most homeowners insurance policies cover sudden and accidental water damage, such as burst
                        pipes, appliance leaks, or storm damage (with proper coverage). Coverage varies by policy, so we
                        recommend contacting your insurance provider. We provide detailed documentation to support your
                        claim and work directly with adjusters.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="bg-[#F5F7FA] rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    aria-expanded={openFaq === 4}
                  >
                    <span className="text-lg font-bold text-[#1F2933]">
                      How long does structural drying usually take?
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-[#0077C8] transition-transform ${openFaq === 4 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === 4 && (
                    <div className="px-6 pb-6">
                      <p className="text-[#6B7280] leading-relaxed">
                        Structural drying typically takes 3-5 days, depending on the extent of water damage, materials
                        affected, and environmental conditions. We use industrial-grade air movers and dehumidifiers
                        while monitoring moisture levels daily to ensure complete drying. Severe flood damage may take
                        longer.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="bg-[#F5F7FA] rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    aria-expanded={openFaq === 5}
                  >
                    <span className="text-lg font-bold text-[#1F2933]">
                      Can you help with mold if it has already started to form?
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-[#0077C8] transition-transform ${openFaq === 5 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === 5 && (
                    <div className="px-6 pb-6">
                      <p className="text-[#6B7280] leading-relaxed">
                        Yes! AquaPure Restoration offers professional mold inspection and mold remediation services. If
                        mold has begun growing due to water damage, we can safely remove it, treat affected areas, and
                        implement measures to prevent future mold growth. The key is addressing moisture issues
                        quickly—mold can start growing within 24-48 hours of water exposure.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-16 bg-gradient-to-br from-[#004080] to-[#0077C8] text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Need Emergency Water Damage Restoration in Catawba, NC?
              </h2>
              <p className="text-xl mb-8 text-gray-100">
                Call now for 24/7 emergency water removal and a FREE inspection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:18285685570"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#004080] font-bold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
                >
                  <Phone className="w-6 h-6" />
                  Call (828) 568-5570 Now
                </a>
                <button
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center gap-2 bg-[#00A0E0] hover:bg-[#0088C0] text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
                >
                  Request Free Inspection Online
                </button>
              </div>
            </div>
          </section>

          {/* LOCATION MAP */}
        </main>

        {/* FOOTER */}
        <footer className="bg-[#1F2933] text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="bg-white rounded-lg p-2 inline-block mb-4">
                  <Image
                    src="/images/logo.webp"
                    alt="AquaPure Restoration logo"
                    width={160}
                    height={50}
                    className="h-10 w-auto"
                  />
                </div>
                <p className="text-sm leading-relaxed">
                  Professional water damage restoration and flood cleanup services in Catawba, NC and surrounding
                  communities.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Contact Us</h3>
                <div className="space-y-2 text-sm">
                  <p>AquaPure Restoration LLC</p>
                  <p>5159 Bert Dr, Catawba, NC 28609</p>
                  <p>
                    Phone:{" "}
                    <a href="tel:18285685570" className="text-[#00A0E0] hover:underline">
                      (828) 568-5570
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:aquapurerestoration@gmail.com" className="text-[#00A0E0] hover:underline">
                      aquapurerestoration@gmail.com
                    </a>
                  </p>
                  <p className="text-[#00A0E0] font-medium">Open 24/7</p>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Service Area</h3>
                <p className="text-sm">
                  Serving Catawba, NC and surrounding communities with 24/7 emergency water damage restoration, flood
                  cleanup, and mold remediation services.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-sm">
              <p>© {new Date().getFullYear()} AquaPure Restoration LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
