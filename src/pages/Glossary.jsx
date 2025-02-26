import React from 'react';
    import { Link } from 'react-router-dom';
    import './Glossary.css'; // Import the CSS file

    const terms = [
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        description: 'Advanced language model for text generation, conversation, and content creation',
        cost: 'Free (Basic), $20/month (Plus), Custom pricing (Enterprise)',
        learningCurve: 'Low - Simple chat interface with basic prompting',
        useCase: 'Content creation, coding assistance, brainstorming, research',
        implementation: 'Web-based interface or API integration',
        easeOfUse: 5,
        flexibility: 5,
        productLink: 'https://openai.com/chatgpt',
      },
      {
        id: 'customgpt',
        name: 'CustomGPT.ai',
        description: 'Platform for creating and deploying custom AI chatbots without coding',
        cost: 'Starting at $29/month (Pro), $99/month (Business)',
        learningCurve: 'Low to Medium - Visual bot builder with customization options',
        useCase: 'Customer service, lead generation, automated support, knowledge base automation',
        implementation: 'Web platform with embeddable widgets and API',
        easeOfUse: 4,
        flexibility: 4,
        productLink: 'https://customgpt.ai',
      },
      {
        id: 'jasper',
        name: 'Jasper',
        description: 'AI writing assistant for creating marketing copy, blog posts, and more',
        cost: 'Starting at $49/month (Creator), $69/month (Teams)',
        learningCurve: 'Medium - Requires understanding of AI prompting and templates',
        useCase: 'Marketing content, blog posts, social media, website copy',
        implementation: 'Web-based platform with integrations',
        easeOfUse: 4,
        flexibility: 4,
        productLink: 'https://www.jasper.ai/',
      },
      {
        id: 'grammarly',
        name: 'Grammarly',
        description: 'AI-powered writing assistant for grammar, spelling, and style checking',
        cost: 'Free (Basic), $12/month (Premium), Custom pricing (Business)',
        learningCurve: 'Low - Seamless integration with writing platforms',
        useCase: 'Grammar checking, style improvement, plagiarism detection',
        implementation: 'Browser extension, desktop app, web editor',
        easeOfUse: 5,
        flexibility: 3,
        productLink: 'https://www.grammarly.com/',
      },
      {
        id: 'frase',
        name: 'Frase',
        description: 'AI content optimization tool for SEO and content strategy',
        cost: 'Starting at $44.99/month (Basic), $114.99/month (Team)',
        learningCurve: 'Medium - Requires SEO knowledge and content strategy',
        useCase: 'SEO content, content briefs, content optimization',
        implementation: 'Web-based platform',
        easeOfUse: 3,
        flexibility: 4,
        productLink: 'https://www.frase.io/',
      },
      {
        id: 'notionai',
        name: 'Notion AI',
        description: 'AI-powered features integrated into the Notion workspace',
        cost: 'Add-on to Notion subscription, varies by plan',
        learningCurve: 'Low to Medium - Integrates with existing Notion workflows',
        useCase: 'Content generation, summarization, brainstorming, writing assistance',
        implementation: 'Integrated within Notion',
        easeOfUse: 4,
        flexibility: 4,
        productLink: 'https://www.notion.so/product/ai',
      },
      {
        id: 'writesonic',
        name: 'Writesonic',
        description: 'AI writing tool for generating various types of content',
        cost: 'Starting at $16/month (Small Team), $12.67/month (Freelancer)',
        learningCurve: 'Medium - Requires understanding of AI prompting and templates',
        useCase: 'Blog posts, articles, website copy, marketing content',
        implementation: 'Web-based platform',
        easeOfUse: 4,
        flexibility: 4,
        productLink: 'https://writesonic.com/',
      },
      {
        id: 'scalenut',
        name: 'Scalenut',
        description: 'AI-powered SEO and content marketing platform',
        cost: 'Starting at $39/month (Essential), $79/month (Growth)',
        learningCurve: 'Medium - Requires SEO knowledge and content strategy',
        useCase: 'SEO content, content planning, keyword research',
        implementation: 'Web-based platform',
        easeOfUse: 3,
        flexibility: 4,
        productLink: 'https://www.scalenut.com/',
      },
      {
        id: 'descript',
        name: 'Descript',
        description: 'All-in-one audio and video editing tool with AI features',
        cost: 'Free (Basic), $12/month (Creator), $24/month (Pro)',
        learningCurve: 'Medium - Requires understanding of audio/video editing',
        useCase: 'Podcast editing, video editing, transcription',
        implementation: 'Desktop application',
        easeOfUse: 4,
        flexibility: 5,
        productLink: 'https://www.descript.com/',
      },
      {
        id: 'murfai',
        name: 'Murf AI',
        description: 'AI voice generator for creating realistic voiceovers',
        cost: 'Starting at $29/month (Basic), $39/month (Pro)',
        learningCurve: 'Low - Easy-to-use interface for voice generation',
        useCase: 'Voiceovers, e-learning, audiobooks, marketing videos',
        implementation: 'Web-based platform',
        easeOfUse: 5,
        flexibility: 4,
        productLink: 'https://murf.ai/',
      },
      {
        id: 'synthesia',
        name: 'Synthesia',
        description: 'AI video creation platform with AI avatars',
        cost: 'Starting at $30/month (Personal)',
        learningCurve: 'Medium - Requires understanding of video creation',
        useCase: 'Training videos, marketing videos, explainer videos',
        implementation: 'Web-based platform',
        easeOfUse: 4,
        flexibility: 5,
        productLink: 'https://www.synthesia.io/',
      },
      {
        id: 'quillbot',
        name: 'QuillBot',
        description: 'AI paraphrasing and summarizing tool',
        cost: 'Free (Basic), $9.95/month (Premium)',
        learningCurve: 'Low - Simple and intuitive interface',
        useCase: 'Paraphrasing, summarizing, grammar checking',
        implementation: 'Browser extension, web editor',
        easeOfUse: 5,
        flexibility: 3,
        productLink: 'https://quillbot.com/',
      },
      {
        id: 'anyword',
        name: 'Anyword',
        description: 'AI copywriting platform for generating marketing copy',
        cost: 'Starting at $39/month (Starter), $79/month (Data-Driven)',
        learningCurve: 'Medium - Requires understanding of marketing principles',
        useCase: 'Marketing copy, ad copy, social media posts',
        implementation: 'Web-based platform',
        easeOfUse: 4,
        flexibility: 4,
        productLink: 'https://www.anyword.com/',
      },
      {
        id: 'prowritingaid',
        name: 'ProWritingAid',
        description: 'AI-powered writing assistant for grammar, style, and readability',
        cost: '$79/year',
        learningCurve: 'Low - Integrates with writing platforms',
        useCase: 'Grammar checking, style improvement, readability analysis',
        implementation: 'Desktop app, browser extension',
        easeOfUse: 4,
        flexibility: 3,
        productLink: 'https://prowritingaid.com/',
      },
      {
        id: 'aiseo',
        name: 'AISEO',
        description: 'AI-powered SEO tools for content optimization and keyword research',
        cost: 'Starting at $19/month (Startup), $49/month (Growth)',
        learningCurve: 'Medium - Requires SEO knowledge',
        useCase: 'SEO content, keyword research, content optimization',
        implementation: 'Web-based platform',
        easeOfUse: 3,
        flexibility: 4,
        productLink: 'https://aiseo.ai/',
      },
      {
        id: 'hypotenuseai',
        name: 'Hypotenuse AI',
        description: 'AI content generation platform for e-commerce and marketing',
        cost: 'Starting at $29/month (Starter), $59/month (Growth)',
        learningCurve: 'Medium - Requires understanding of e-commerce and marketing',
        useCase: 'Product descriptions, ad copy, website content',
        implementation: 'Web-based platform',
        easeOfUse: 4,
        flexibility: 4,
        productLink: 'https://www.hypotenuse.ai/',
      },
      {
        id: 'getgenie',
        name: 'GetGenie',
        description: 'AI-powered WordPress plugin for content generation and SEO',
        cost: 'Starting at $19/month (Starter), $49/month (Growth)',
        learningCurve: 'Medium - Requires WordPress knowledge',
        useCase: 'Blog posts, product descriptions, SEO optimization',
        implementation: 'WordPress plugin',
        easeOfUse: 4,
        flexibility: 4,
        productLink: 'https://getgenie.ai/',
      },
    ];

    function generateStars(rating) {
      let stars = '';
      for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
      }
      return stars;
    }

    function Glossary() {
      return (
        <div className="glossary">
          <div className="container">
            <h2>Glossary of AI Tools</h2>
            <div className="term-grid">
              {terms.map(term => (
                <div key={term.id} className="term-item">
                  <h3>{term.name}</h3>
                  <p>{term.description}</p>
                  <p><strong>Cost:</strong> {term.cost}</p>
                  <p><strong>Learning Curve:</strong> {term.learningCurve}</p>
                  <p><strong>Use Case:</strong> {term.useCase}</p>
                  <p><strong>Implementation:</strong> {term.implementation}</p>
                  <p><strong>Ease of Use:</strong> {generateStars(term.easeOfUse)}</p>
                  <p><strong>Flexibility:</strong> {generateStars(term.flexibility)}</p>
                  <div className="term-links">
                    <a href="https://myfreetoolbar.com/glossary/more.html" target="_blank" rel="noopener noreferrer">
                      More Info →
                    </a>
                    <a href={term.productLink} target="_blank" rel="noopener noreferrer">
                      Get Started →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    export default Glossary;
