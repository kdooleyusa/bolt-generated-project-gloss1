import React from 'react';
    import { useParams } from 'react-router-dom';

    const termDetails = {
      chatgpt: {
        name: 'ChatGPT',
        description: 'A large language model chatbot developed by OpenAI.',
        cost: 'Free/Paid',
        learningCurve: 'Easy',
        uses: 'Text generation, conversation, content creation',
        implementation: 'Web interface, API',
      },
      dalle2: {
        name: 'DALL-E 2',
        description: 'An AI system that can create realistic images and art from a description in natural language.',
        cost: 'Paid',
        learningCurve: 'Medium',
        uses: 'Image generation, art creation',
        implementation: 'Web interface, API',
      },
      bard: {
        name: 'Bard',
        description: 'An AI conversational chatbot developed by Google.',
        cost: 'Free',
        learningCurve: 'Easy',
        uses: 'Text generation, conversation, information retrieval',
        implementation: 'Web interface',
      },
    };

    function TermDetails() {
      const { termId } = useParams();
      const term = termDetails[termId];

      if (!term) {
        return (
          <div className="term-details">
            <div className="container">
              <h3>Term Not Found</h3>
              <p>The requested term was not found in the glossary.</p>
            </div>
          </div>
        );
      }

      return (
        <div className="term-details">
          <div className="container">
            <h3>{term.name}</h3>
            <p>{term.description}</p>
            <p><strong>Cost:</strong> {term.cost}</p>
            <p><strong>Learning Curve:</strong> {term.learningCurve}</p>
            <p><strong>Uses:</strong> {term.uses}</p>
            <p><strong>Implementation:</strong> {term.implementation}</p>
          </div>
        </div>
      );
    }

    export default TermDetails;
