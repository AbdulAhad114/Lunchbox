import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function PrivacyPolicy() {
  return (
    <>
        <Navigation />
        <div className="h-[80px] pt-12"></div>   
        <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 bg-white my-8 sm:my-12">
        <h1 className="text-3xl sm:text-4xl font-apfel font-bold mb-6 sm:mb-8 text-center text-primary-blue">
            Privacy Policy
        </h1>

        <section className="mb-6">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit
            our website. Please read this policy carefully to understand our views
            and practices regarding your personal data and how we will treat it.
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-blue">
            1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
            <li>Personal identification information (name, email, phone number, etc.)</li>
            <li>Usage data such as browser type, IP address, and pages visited</li>
            <li>Cookies and tracking technologies</li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-blue">
            2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
            <li>To provide and maintain our services</li>
            <li>To improve user experience and website functionality</li>
            <li>To send periodic emails and updates (if subscribed)</li>
            <li>To comply with legal obligations</li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-blue">
            3. Sharing Your Information
            </h2>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
            We do not sell, trade, or rent your personal identification information
            to others. We may share generic aggregated demographic information not
            linked to any personal identification information with our business partners,
            trusted affiliates, and advertisers for the purposes outlined above.
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-blue">4. Cookies</h2>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
            Our website uses cookies to enhance user experience. You can choose to
            set your web browser to refuse cookies or to alert you when cookies are
            being sent. Please note that some parts of the site may not function
            properly if cookies are disabled.
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-blue">
            5. Your Data Protection Rights
            </h2>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
            Depending on your location, you may have the following rights regarding
            your personal data:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
            <li>Access to and correction of your data</li>
            <li>Request deletion of your personal data</li>
            <li>Right to object or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time (where applicable)</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-blue">6. Contact Us</h2>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
            If you have any questions about this Privacy Policy or the practices of this website,
            please contact us at:
            </p>
            <address className="not-italic mt-2 text-gray-800 text-sm sm:text-base md:text-lg">
            Email:{" "}
            <a
                href="mailto:howdy@alphasquad.tech"
                className="text-primary-blue underline break-words"
            >
                howdy@alphasquad.tech
            </a>
            <br />
            </address>
        </section>
        </main>
        <Footer />
    </>
  );
}
