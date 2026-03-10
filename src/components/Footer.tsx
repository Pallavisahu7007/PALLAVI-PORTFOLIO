import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Designed & Built with <Heart className="h-4 w-4 text-secondary fill-secondary" /> by{' '}
          <span className="text-primary font-semibold">Pallavi Sahu</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
