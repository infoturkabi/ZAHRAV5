import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import {
  Sparkles,
  IceCreamCone,
  Building2,
  Users,
  CircleDot,
  Music,
  Check,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Menu,
  X,
  Trophy,
  Handshake,
  CheckCircle,
  MessageCircle,
  Play,
  Globe,
} from 'lucide-react';
import {
  IMAGES,
  PACKAGES_DATA,
  VIDEOS_DATA,
  TRUSTED_DATA,
  CONTACT_DATA,
} from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const getWhatsAppLink = () => {
    const message = encodeURIComponent(t.contact.template);
    return `https://wa.me/6282113842595?text=${message}`;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'experience', label: t.nav.experience },
    { id: 'packages', label: t.nav.packages },
    { id: 'how-it-works', label: t.nav.howItWorks },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'videos', label: t.nav.videos },
    { id: 'faq', label: t.nav.faq },
    { id: 'contact', label: t.nav.contact },
  ];

  const galleryImages = ['turkishIceCream', 'crowd', 'child', 'crowd2', 'child2', 'couple'];

  const iconMap = {
    Sparkles: Sparkles,
    IceCream: IceCreamCone,
    Building2: Building2,
    Users: Users,
    CircleDot: CircleDot,
    Music: Music,
  };

  return (
    <div className="min-h-screen bg-coconut">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-coconut/95 backdrop-blur-md border-b border-accent-line">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-display font-black text-2xl text-text-base tracking-tight"
            >
              ZAHRA<span className="text-accent-tangerine">.</span>
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-semibold text-sm text-text-base/80 hover:text-accent-tangerine transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA and Mobile Menu */}
            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex"
              >
                <Button className="bg-accent-tangerine hover:bg-accent-tangerine/90 text-white font-bold rounded-full px-5 py-2 text-sm shadow-lg shadow-accent-tangerine/25 transition-transform hover:scale-105">
                  Book on WhatsApp
                </Button>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-text-base/5 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-accent-line py-4 animate-in slide-in-from-top-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-3 px-2 font-bold text-text-base hover:text-accent-tangerine transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3"
              >
                <Button className="w-full bg-accent-tangerine hover:bg-accent-tangerine/90 text-white font-bold rounded-full">
                  Book on WhatsApp
                </Button>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        <div className="container mx-auto px-5 relative z-10 pt-20 pb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-accent-tangerine/20 px-4 py-2 rounded-full text-sm font-bold text-accent-tangerine shadow-lg mb-6">
              <IceCreamCone size={16} />
              {HERO_DATA.badge}
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              {HERO_DATA.title}{' '}
              <span className="relative inline-block">
                <span className="text-accent-tangerine">{HERO_DATA.highlight}</span>
                <span className="absolute left-0 right-0 bottom-2 h-3 bg-accent-yellow/50 -z-10 rounded" />
              </span>{' '}
              {HERO_DATA.titleEnd}
            </h1>

            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {HERO_DATA.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent-tangerine hover:bg-accent-tangerine/90 text-white font-bold rounded-full px-8 py-4 text-lg shadow-xl shadow-accent-tangerine/40 transition-transform hover:scale-105">
                  {HERO_DATA.ctaPrimary}
                </Button>
              </a>
              <Button
                variant="outline"
                onClick={() => scrollToSection('packages')}
                className="rounded-full px-8 py-4 text-lg font-bold border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-colors"
              >
                {HERO_DATA.ctaSecondary}
              </Button>
            </div>

            <div className="text-sm font-semibold text-white/80">
              {HERO_DATA.trustBadges.map((badge, i) => (
                <span key={i}>
                  {badge}
                  {i < HERO_DATA.trustBadges.length - 1 && (
                    <span className="mx-2 text-white/40">•</span>
                  )}
                </span>
              ))}
            </div>

            <p className="mt-4 text-white/70 font-semibold text-sm">
              {HERO_DATA.tagline}
            </p>

            {/* Stats Bar */}
            <div className="mt-10 flex gap-8 md:gap-12">
              {HERO_DATA.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-black text-3xl md:text-4xl text-accent-tangerine">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="py-20 lg:py-28">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-tangerine/10 text-accent-tangerine font-bold text-sm mb-4">
              {EXPERIENCE_DATA.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-text-base mb-4">
              {EXPERIENCE_DATA.title}
            </h2>
            <p className="text-text-subtle text-lg">{EXPERIENCE_DATA.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {EXPERIENCE_DATA.features.map((feature, i) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-text-base/5 shadow-lg shadow-text-base/5 hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-tangerine/10 to-accent-yellow/15 border border-text-base/5 flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent size={28} className="text-accent-tangerine" />}
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-base mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-subtle leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Meet the Founders */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="font-display font-bold text-2xl text-text-base text-center mb-8">Meet the Founders</h3>
            <div className="bg-white rounded-2xl overflow-hidden border border-text-base/5 shadow-lg">
              <div className="grid md:grid-cols-2">
                <div
                  className="h-72 md:h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url(${IMAGES.owner})` }}
                />
                <div
                  className="h-72 md:h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url(${IMAGES.ownerSerdal})` }}
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="font-display font-bold text-xl text-text-base">Bringing Turkish Ice Cream Magic to Jakarta</h4>
                <p className="text-text-subtle font-medium mt-2">Since 2011, creating smiles and unforgettable memories</p>
              </div>
            </div>
          </div>

          {/* Our Showmen in Action - Running Carousel */}
          <div className="mt-16">
            <h3 className="font-display font-bold text-2xl text-text-base text-center mb-8">Our Showmen in Action</h3>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="flex animate-scroll gap-4">
                {[IMAGES.showman1, IMAGES.showman2, IMAGES.showman3, IMAGES.showman1, IMAGES.showman2, IMAGES.showman3].map((img, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={img}
                      alt={`Showman performance ${(i % 3) + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-text-subtle font-medium mt-4">Professional Turkish ice cream performers & entertainers</p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 lg:py-28 bg-gradient-to-b from-coconut to-coconut-dark">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-tangerine/10 text-accent-tangerine font-bold text-sm mb-4">
              {PACKAGES_DATA.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-text-base mb-4">
              {PACKAGES_DATA.title}
            </h2>
            <p className="text-text-subtle text-lg">{PACKAGES_DATA.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {PACKAGES_DATA.packages.map((pkg, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 border shadow-lg transition-transform hover:-translate-y-1 ${
                  pkg.featured
                    ? 'border-2 border-accent-yellow shadow-accent-yellow/20 -translate-y-2'
                    : 'border-text-base/5 shadow-text-base/5'
                }`}
              >
                {pkg.badge && (
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-accent-yellow to-accent-yellow-light font-bold text-xs uppercase tracking-wide mb-3">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="font-display font-bold text-xl text-text-base">{pkg.name}</h3>
                <div className="font-display font-black text-3xl text-accent-tangerine mt-2">
                  {pkg.price}
                  <span className="text-base font-semibold text-text-subtle ml-1">
                    {pkg.perEvent}
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  {pkg.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check size={18} className="text-accent-yellow mt-0.5 flex-shrink-0" />
                      <span className="text-text-subtle font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a href="#contact">
                    <Button
                      className={`w-full rounded-full font-bold py-3 transition-transform hover:scale-105 ${
                        pkg.featured
                          ? 'bg-accent-tangerine hover:bg-accent-tangerine/90 text-white shadow-lg shadow-accent-tangerine/30'
                          : 'bg-text-base hover:bg-text-base/90 text-white'
                      }`}
                    >
                      Request Quote
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-white/70 border-l-4 border-accent-yellow text-text-subtle font-medium">
            {PACKAGES_DATA.note}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-tangerine/10 text-accent-tangerine font-bold text-sm mb-4">
              {ADDONS_DATA.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-text-base mb-4">
              {ADDONS_DATA.title}
            </h2>
            <p className="text-text-subtle text-lg">{ADDONS_DATA.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ADDONS_DATA.addons.map((addon, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-text-base/5 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div
                  className="h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${IMAGES[addon.image]})` }}
                />
                <div className="p-5">
                  <h3 className="font-display font-bold text-xl text-text-base">{addon.title}</h3>
                  <p className="text-text-subtle mt-2">
                    <strong className="text-accent-tangerine text-lg">{addon.price}</strong>
                  </p>
                  <p className="text-text-subtle font-medium mt-1">{addon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-text-base text-white">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-yellow/20 text-accent-yellow font-bold text-sm mb-4">
              {HOW_IT_WORKS_DATA.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
              {HOW_IT_WORKS_DATA.title}
            </h2>
            <p className="text-white/75 text-lg">{HOW_IT_WORKS_DATA.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {HOW_IT_WORKS_DATA.steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-tangerine to-accent-tangerine/80 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-accent-tangerine/40">
                  <span className="font-display font-black text-xl">{step.number}</span>
                </div>
                <h3 className="font-bold text-base mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 lg:py-28">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-tangerine/10 text-accent-tangerine font-bold text-sm mb-4">
              {GALLERY_DATA.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-text-base mb-4">
              {GALLERY_DATA.title}
            </h2>
            <p className="text-text-subtle text-lg">{GALLERY_DATA.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_DATA.items.map((item, i) => (
              <figure
                key={i}
                className="rounded-2xl overflow-hidden border border-text-base/5 bg-white shadow-lg shadow-text-base/5 group"
              >
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${IMAGES[item.image]})` }}
                />
                <figcaption className="p-4">
                  <div className="font-bold text-text-base">{item.title}</div>
                  <div className="text-sm text-text-subtle font-medium">{item.subtitle}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 lg:py-28 bg-gradient-to-b from-coconut to-coconut-dark">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-tangerine/10 text-accent-tangerine font-bold text-sm mb-4">
              {VIDEOS_DATA.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-text-base mb-4">
              {VIDEOS_DATA.title}
            </h2>
            <p className="text-text-subtle text-lg">{VIDEOS_DATA.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEOS_DATA.videos.map((video, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-text-base/5 bg-white shadow-lg shadow-text-base/5 group hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-text-base line-clamp-1">{video.title}</h3>
                  <p className="text-sm text-text-subtle font-medium mt-1">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={VIDEOS_DATA.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 font-bold border-2 border-accent-tangerine/30 hover:border-accent-tangerine hover:bg-accent-tangerine/5 transition-colors"
              >
                <Play size={18} className="mr-2" />
                Watch More on YouTube
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-coconut to-coconut-dark">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-tangerine/10 text-accent-tangerine font-bold text-sm mb-4">
              {TRUSTED_DATA.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-text-base mb-4">
              {TRUSTED_DATA.title}
            </h2>
            <p className="text-text-subtle text-lg">{TRUSTED_DATA.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-6 border border-text-base/5 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-tangerine/10 to-accent-yellow/15 border border-text-base/5 flex items-center justify-center mb-4">
                <Trophy size={28} className="text-accent-tangerine" />
              </div>
              <h3 className="font-display font-bold text-xl text-text-base mb-4">
                Corporate Clients
              </h3>
              <ul className="space-y-2">
                {TRUSTED_DATA.corporateClients.map((client, i) => (
                  <li key={i} className="text-text-subtle font-medium text-sm flex items-start gap-2">
                    <Check size={14} className="text-accent-yellow mt-1 flex-shrink-0" />
                    {client}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-text-base/5 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-tangerine/10 to-accent-yellow/15 border border-text-base/5 flex items-center justify-center mb-4">
                <Handshake size={28} className="text-accent-tangerine" />
              </div>
              <h3 className="font-display font-bold text-xl text-text-base mb-4">
                Event Organizer Partners
              </h3>
              <ul className="space-y-2">
                {TRUSTED_DATA.eventPartners.map((partner, i) => (
                  <li key={i} className="text-text-subtle font-medium text-sm flex items-start gap-2">
                    <Check size={14} className="text-accent-yellow mt-1 flex-shrink-0" />
                    {partner}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-text-base/5 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-tangerine/10 to-accent-yellow/15 border border-text-base/5 flex items-center justify-center mb-4">
                <CheckCircle size={28} className="text-accent-tangerine" />
              </div>
              <h3 className="font-display font-bold text-xl text-text-base mb-4">What you get</h3>
              <p className="text-text-subtle leading-relaxed">
                Professional showman, premium Turkish ice cream, smooth coordination, and a fun guest
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-tangerine/10 text-accent-tangerine font-bold text-sm mb-4">
              {REQUIREMENTS_DATA.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-text-base mb-4">
              {REQUIREMENTS_DATA.title}
            </h2>
            <p className="text-text-subtle text-lg">{REQUIREMENTS_DATA.description}</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 border border-text-base/5 shadow-lg">
            <div className="space-y-3">
              {REQUIREMENTS_DATA.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-accent-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-text-subtle font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28 bg-gradient-to-b from-coconut to-coconut-dark">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-tangerine/10 text-accent-tangerine font-bold text-sm mb-4">
              {FAQ_DATA.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-text-base mb-4">
              {FAQ_DATA.title}
            </h2>
            <p className="text-text-subtle text-lg">{FAQ_DATA.description}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ_DATA.questions.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white rounded-2xl border border-text-base/5 shadow-md px-5 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-bold text-text-base hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-subtle font-medium pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-accent-tangerine to-accent-tangerine/90 text-white">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 font-bold text-sm mb-4">
              {CONTACT_DATA.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
              {CONTACT_DATA.title}
            </h2>
            <p className="text-white/85 text-lg">{CONTACT_DATA.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* WhatsApp Template Panel */}
            <div className="bg-white/95 text-text-base rounded-2xl p-6 border border-text-base/10 shadow-2xl">
              <h3 className="font-display font-bold text-xl mb-4">Book on WhatsApp (Template)</h3>
              <div className="bg-coconut rounded-xl p-4 border border-text-base/5 text-text-subtle font-medium whitespace-pre-line leading-relaxed mb-5">
                {CONTACT_DATA.whatsappTemplate}
              </div>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-accent-tangerine hover:bg-accent-tangerine/90 text-white font-bold rounded-full py-3 shadow-lg shadow-accent-tangerine/30 transition-transform hover:scale-105">
                  Open WhatsApp with Template
                </Button>
              </a>
              <p className="mt-4 text-sm text-text-subtle font-medium">
                Tip: Copy the template text and paste in WhatsApp if your device blocks prefilled
                messages.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-xl bg-white/15 border border-white/20">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="font-bold mb-1">WhatsApp</div>
                  {CONTACT_DATA.whatsappNumbers.map((num, i) => (
                    <div key={i}>
                      <a
                        href={CONTACT_DATA.whatsappLinks[i]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:underline"
                      >
                        {num}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-white/15 border border-white/20">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="font-bold mb-1">Email</div>
                  <a href={`mailto:${CONTACT_DATA.email}`} className="font-bold hover:underline">
                    {CONTACT_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-white/15 border border-white/20">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Instagram size={22} />
                </div>
                <div>
                  <div className="font-bold mb-1">Instagram</div>
                  <a
                    href={CONTACT_DATA.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                  >
                    {CONTACT_DATA.instagram}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-white/15 border border-white/20">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="font-bold mb-1">Office</div>
                  <div className="font-semibold opacity-90">
                    {CONTACT_DATA.office.name}
                    <br />
                    {CONTACT_DATA.office.address}
                    <br />
                    {CONTACT_DATA.office.street}
                    <br />
                    {CONTACT_DATA.office.city}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-base text-white py-10">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <a href="#home" className="font-display font-black text-2xl">
              ZAHRA<span className="text-accent-tangerine">.</span>
            </a>
            <div className="flex flex-wrap gap-4 justify-center">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white/70 hover:text-white font-semibold text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-white/60 font-medium">{FOOTER_DATA.copyright}</div>
            <div className="text-accent-yellow font-semibold mt-2">{FOOTER_DATA.tagline}</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/40 transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </div>
  );
};

export default LandingPage;
