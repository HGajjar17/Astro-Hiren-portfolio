import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { footerData } from '../data/footerData';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-background/95 px-4 pb-11 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8" />
        <h3 className="mb-4 text-lg font-semibold text-center md:text-left">Let's Connect</h3>
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <div className="flex gap-4">
            {footerData.socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" className="rounded-full">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon === 'Github' && <Github className="h-5 w-5" />}
                  {link.icon === 'Linkedin' && <Linkedin className="h-5 w-5" />}
                  {link.icon === 'Mail' && <Mail className="h-5 w-5" />}
                </a>
              </Button>
            ))}
          </div>
          <p>
            <i>{footerData.quote}</i>
          </p>
          <div className="flex gap-4 font-semibold">
            <a href={footerData.githubCodeLink} className="hover:text-primary">
              Check out the code on Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
