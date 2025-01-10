import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { NavBar } from '../components/nav-bar'

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />
            <article className="max-w-5xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                        Contact Us
                    </h1>
                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                        Get in Touch with DSAI Lab
                    </div>
                </header>

                {/* Research Collaboration */}
                <section className="space-y-6 mb-8">
                    <h3 className="font-semibold text-center uppercase tracking-wider text-md font-medium text-muted-foreground mb-8">
                        Research Collaboration
                    </h3>
                    <div className="space-y-8">
                        <p className="leading-relaxed">
                            We welcome collaboration opportunities with academic institutions, industry partners, and fellow researchers. If you're interested in working with us on AI and Data Science applications in the medical field, please reach out via email with a brief description of your proposed collaboration.
                        </p>
                    </div>
                </section>

                {/* For Students */}
                <section className="space-y-6 mb-8">
                    <h3 className="font-semibold text-center uppercase tracking-wider text-md font-medium text-muted-foreground mb-8">
                        For Students
                    </h3>
                    <div className="space-y-8">
                        <p className="leading-relaxed">
                            If you're a student interested in joining our laboratory for research or thesis work, please send us your CV and research interests. We're always looking for motivated students who are passionate about AI and its applications in the medical sector.
                        </p>
                    </div>
                </section>

                <section className="space-y-6 mb-8">
                    <h3 className="font-semibold text-center uppercase tracking-wider text-md font-medium text-muted-foreground mb-8">
                        Contact Information
                    </h3>
                    <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-8">

                        {/* Contact Information */}
                        <section className="space-y-8 md:w-1/2">

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <MapPinIcon className="h-6 w-6 text-gray-600" />
                                    <div>
                                        <p className="font-medium">Laboratory Location</p>
                                        <p className="text-muted-foreground">Department of Mathematics</p>
                                        <p className="text-muted-foreground">Hasanuddin University</p>
                                        <p className="text-muted-foreground">Makassar, Indonesia</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <EnvelopeIcon className="h-6 w-6 text-gray-600" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <a href="mailto:dsai.lab@unhas.ac.id" className="text-blue-600 hover:text-blue-800">
                                            dsai.lab@unhas.ac.id
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <PhoneIcon className="h-6 w-6 text-gray-600" />
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <p className="text-muted-foreground">+62 411 123456</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Map */}
                        <section className="md:w-1/2">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.620194937768!2d119.4955633147744!3d-5.138967153073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf1c0a6b1b1e1d%3A0x3030bfbcaf770b0!2sHasanuddin%20University!5e0!3m2!1sen!2sid!4v1633021234567!5m2!1sen!2sid"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>
                        </section>
                    </div>
                </section>

            </article>
        </main>
    )
}
