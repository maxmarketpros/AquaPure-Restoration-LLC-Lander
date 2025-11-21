import Link from "next/link"
import Script from "next/script"
import { CheckCircle, Phone, Home as HomeIcon } from "lucide-react"

export const metadata = {
  title: "Thank You | AquaPure Restoration",
  description:
    "Thank you for contacting AquaPure Restoration. Our team will reach out shortly to assist with your water damage needs.",
}

export default function ThankYouPage() {
  return (
    <>
      <Script id="gtag-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17747714492/C-0mCM3Dg8QbELzD4o5C',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </Script>

      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4 py-16">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 text-center space-y-6 border border-gray-100">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-full bg-[#E6F4FB] flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-[#0077C8]" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1F2933]">Thank you for reaching out!</h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            We received your request and will call you shortly to schedule your free inspection. For urgent needs,
            please call us right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:18285685570"
              className="inline-flex items-center justify-center gap-2 bg-[#004080] hover:bg-[#003366] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md text-lg"
            >
              <Phone className="w-5 h-5" />
              Call (828) 568-5570
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#004080] font-semibold px-6 py-3 rounded-lg transition-colors shadow-md border border-[#004080] text-lg"
            >
              <HomeIcon className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
