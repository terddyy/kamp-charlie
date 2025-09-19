import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What should I bring to Kamp Charlie-nae?',
      answer: 'Bring your own tent, sleeping bag, personal clothing, toiletries, and any special dietary items. We recommend bringing a flashlight, insect repellent, sunscreen, and a water bottle. Detailed packing list will be sent via email after registration.'
    },
    {
      question: 'Are meals included in the ticket price?',
      answer: 'Basic meals (dinner on Day 1 and breakfast on Day 2) are included. Additional snacks and beverages will be available for purchase on-site. Special dietary requirements can be accommodated with advance notice.'
    },
    {
      question: 'What if it rains during the event?',
      answer: 'The event will continue rain or shine! We have covered areas for activities and meals. Make sure to bring appropriate rain gear and waterproof clothing. Safety is our priority - severe weather may result in activity modifications.'
    },
    {
      question: 'Is there electricity and water available?',
      answer: 'Basic facilities including restrooms and water stations are available. Limited electrical outlets may be accessible in common areas. We encourage bringing portable power banks for your devices.'
    },
    {
      question: 'Can I get a refund if I can\'t attend?',
      answer: 'Full refunds are available up to 7 days before the event. Partial refunds (50%) available 3-7 days before. No refunds within 3 days of the event due to catering and logistics commitments.'
    },
    {
      question: 'Are pets allowed at the camping event?',
      answer: 'Unfortunately, pets are not allowed at Kamp Charlie-nae for safety and health reasons. This policy helps ensure all attendees can enjoy the event comfortably.'
    },
    {
      question: 'What age restrictions apply?',
      answer: 'All ages are welcome! Children under 5 attend for free, children 5-12 have discounted rates. Minors must be accompanied by a parent or guardian at all times.'
    },
    {
      question: 'How do I receive my tickets and merchandise?',
      answer: 'After payment confirmation, you\'ll receive a digital ticket with QR code via email. Merchandise (t-shirt, mug, cap, stickers) will be distributed during check-in at the event.'
    },
    {
      question: 'Is there parking available at the venue?',
      answer: 'Yes, free parking is available on-site. Arrive early for the best parking spots close to the camping areas. Overnight parking is allowed for event attendees.'
    },
    {
      question: 'What safety measures are in place?',
      answer: 'We have trained staff on-site, first aid stations, emergency procedures, and 24/7 security. All attendees will receive a safety briefing during check-in. Emergency contact numbers will be provided.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Frequently Asked Questions</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Got Questions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about Kamp Charlie-nae. 
            Can't find what you're looking for? Contact us directly!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border shadow-soft hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help! Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-2 text-sm">
              <div><strong>Email:</strong> info@kampcharlie-nae.com</div>
              <div><strong>Phone:</strong> +63 917 123 4567</div>
              <div><strong>Response Time:</strong> Within 24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;