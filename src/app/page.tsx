"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, Award, Heart, MapPin, Zap, Leaf, Home, TrendingUp, Users, Star, Globe, MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="radialGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Luxe Retreat"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Rooms", id: "rooms" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "contact"
          }}
          buttonClassName="font-medium"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Experience Luxury at Luxe Retreat"
          description="Discover elegance, comfort, and world-class hospitality in the heart of paradise. Your perfect getaway awaits."
          tag="Five-Star Experience"
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849969880-1k671lbk.jpg",
              imageAlt: "Luxury hotel bedroom suite"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849970610-c3dipho0.jpg",
              imageAlt: "Hotel swimming pool resort"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849971319-ons2j0d3.jpg",
              imageAlt: "Hotel dining restaurant"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849972402-9bho687u.jpg",
              imageAlt: "Hotel spa wellness center"
            }
          ]}
          buttons={[
            { text: "Book a Room", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          className="py-20"
          titleClassName="text-5xl md:text-6xl font-bold"
          descriptionClassName="text-lg md:text-xl font-light"
          tagClassName="text-sm font-semibold"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Luxe Retreat"
          description="For over two decades, Luxe Retreat has been the premier destination for discerning travelers seeking unparalleled comfort and exceptional service."
          tag="Our Story"
          tagIcon={Award}
          textboxLayout="split"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849973232-vxznyn3w.jpg"
          imageAlt="Luxury hotel exterior architecture"
          bulletPoints={[
            {
              title: "World-Class Service",
              description: "24/7 concierge service dedicated to making your stay unforgettable",
              icon: Heart
            },
            {
              title: "Prime Location",
              description: "Situated in the most sought-after area with breathtaking views",
              icon: MapPin
            },
            {
              title: "Luxury Amenities",
              description: "Spa, fine dining, infinity pool, and state-of-the-art fitness center",
              icon: Zap
            },
            {
              title: "Eco-Conscious",
              description: "Committed to sustainable hospitality practices and green initiatives",
              icon: Leaf
            }
          ]}
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Our Room Collection"
          description="Choose from our carefully curated selection of rooms, each designed for maximum comfort and elegance"
          tag="Room Types"
          tagIcon={Home}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Standard Room",
              price: "$149/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849975192-hjqp33os.jpg",
              imageAlt: "Standard hotel room"
            },
            {
              id: "2",
              name: "Deluxe Suite",
              price: "$249/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849973965-wwbxfb4d.jpg",
              imageAlt: "Deluxe hotel suite"
            },
            {
              id: "3",
              name: "Executive Suite",
              price: "$399/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849974447-r6ml97hj.jpg",
              imageAlt: "Executive hotel suite"
            },
            {
              id: "4",
              name: "Penthouse Suite",
              price: "$599/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849975719-grd7l9e5.jpg",
              imageAlt: "Penthouse luxury suite"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="By The Numbers"
          description="Our commitment to excellence reflected in these milestone achievements"
          tag="Our Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Happy Guests",
              value: "50,000+"
            },
            {
              id: "2",
              icon: Star,
              title: "Avg Rating",
              value: "4.8/5"
            },
            {
              id: "3",
              icon: Award,
              title: "Awards Won",
              value: "27"
            },
            {
              id: "4",
              icon: Globe,
              title: "Countries Visited",
              value: "95+"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Stories"
          description="Hear what our valued guests have to say about their unforgettable experiences"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Travel Executive",
              testimonial: "Our stay at Luxe Retreat was absolutely extraordinary. Every detail was perfection, from the impeccable service to the stunning views. We'll definitely be back!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849976591-08sb9bzs.png",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "James Chen",
              role: "CEO",
              testimonial: "The perfect blend of luxury and comfort. The spa treatments were rejuvenating, and the restaurant exceeded all expectations. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849977273-3fhashbs.jpg",
              imageAlt: "James Chen portrait"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Wedding Planner",
              testimonial: "We hosted our anniversary celebration here and it was magical. The entire team went above and beyond to make our special day memorable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849977863-4hc71dp9.jpg",
              imageAlt: "Emma Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Business Consultant",
              testimonial: "Outstanding facilities and exceptional hospitality. The conference rooms are top-notch, and the staff anticipated every need. Perfect for business retreats.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849978678-x8lrq1xf.jpg",
              imageAlt: "David Thompson portrait"
            },
            {
              id: "5",
              name: "Olivia Bennett",
              role: "Luxury Travel Blogger",
              testimonial: "Luxe Retreat sets the standard for five-star accommodations. The attention to detail and genuine care for guests is unmatched. A true gem!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849979226-x1h52ios.png",
              imageAlt: "Olivia Bennett portrait"
            },
            {
              id: "6",
              name: "Michael Torres",
              role: "Resort Manager",
              testimonial: "As someone in the industry, I was impressed by every aspect. The architecture, service standards, and amenities are world-class. A benchmark property.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849980022-oxvt5ien.jpg",
              imageAlt: "Michael Torres portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Stay"
          description="Ready to experience luxury? Get in touch with our reservations team today. We're here to help make your stay unforgettable."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "checkIn",
              type: "date",
              placeholder: "Check-In Date",
              required: true
            },
            {
              name: "checkOut",
              type: "date",
              placeholder: "Check-Out Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or preferences...",
            rows: 5,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763849981233-79k8hqln.jpg"
          imageAlt="Hotel concierge service"
          mediaPosition="right"
          buttonText="Check Availability"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Rooms", href: "rooms" },
                { label: "Dining", href: "#" },
                { label: "Spa & Wellness", href: "#" },
                { label: "Events", href: "#" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "+1 (555) 123-4567", href: "#" },
                { label: "info@luxeretreat.com", href: "#" },
                { label: "Book Direct", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 Luxe Retreat. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}