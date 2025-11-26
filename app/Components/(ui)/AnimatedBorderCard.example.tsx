/**
 * EXAMPLE: How to use AnimatedBorderCard
 * 
 * This file demonstrates how to use the AnimatedBorderCard component
 * to create cards with animated borders that draw when entering the viewport.
 */

import AnimatedBorderCard from "./AnimatedBorderCard";

// Example 1: Simple usage with default settings
export function SimpleExample() {
  return (
    <AnimatedBorderCard>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Card Title</h3>
        <p>This card's border will animate when it enters the viewport.</p>
      </div>
    </AnimatedBorderCard>
  );
}

// Example 2: Custom styling and animation settings
export function CustomExample() {
  return (
    <AnimatedBorderCard
      className="p-6 bg-gray-50"
      borderColor="#E42B54"
      animationDuration={0.3}
      delay={0.2}
    >
      <h3 className="text-xl font-bold mb-2">Custom Card</h3>
      <p>This card has a pink border with custom animation timing.</p>
    </AnimatedBorderCard>
  );
}

// Example 3: Mapping over data to create multiple cards
interface CardData {
  id: number;
  title: string;
  description: string;
}

export function MultipleCardsExample() {
  const cardsData: CardData[] = [
    {
      id: 1,
      title: "First Card",
      description: "This is the first card with animated border.",
    },
    {
      id: 2,
      title: "Second Card",
      description: "This is the second card with animated border.",
    },
    {
      id: 3,
      title: "Third Card",
      description: "This is the third card with animated border.",
    },
  ];

  return (
    <div className="space-y-8">
      {cardsData.map((card, index) => (
        <AnimatedBorderCard
          key={card.id}
          className="p-6"
          animationDuration={0.2}
          delay={index * 0.1} // Stagger the animations
        >
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          <p>{card.description}</p>
        </AnimatedBorderCard>
      ))}
    </div>
  );
}

// Example 4: Using with sections (like in Lensemble.tsx)
export function SectionExample() {
  return (
    <div className="space-y-8">
      {/* Section with animated border */}
      <AnimatedBorderCard className="pt-4" animationDuration={0.2}>
        <section>
          <h2 className="text-2xl font-bold mb-4">Section Title</h2>
          <p>
            This section has an animated border that draws when it enters the
            viewport. The border animation plays only once.
          </p>
        </section>
      </AnimatedBorderCard>

      {/* Another section with different delay */}
      <AnimatedBorderCard className="pt-4" animationDuration={0.2} delay={0.1}>
        <section>
          <h2 className="text-2xl font-bold mb-4">Another Section</h2>
          <p>
            This section has a slight delay before its border animation starts.
          </p>
        </section>
      </AnimatedBorderCard>
    </div>
  );
}

/**
 * HOW IT WORKS:
 * 
 * 1. The component uses `useInView` hook from Framer Motion to detect
 *    when the element enters the viewport.
 * 
 * 2. The `once: true` option ensures the animation only plays once,
 *    not every time the element enters/exits the viewport.
 * 
 * 3. Four absolutely positioned divs create the border lines:
 *    - Top border (animates left to right using scaleX)
 *    - Right border (animates top to bottom using scaleY)
 *    - Bottom border (animates right to left using scaleX)
 *    - Left border (animates bottom to top using scaleY)
 * 
 * 4. Each border line has a staggered delay to create the
 *    "drawing" effect around the card.
 * 
 * 5. The animation uses `transform: scale` which is GPU-accelerated
 *    and performs better than animating width/height.
 * 
 * PROPS:
 * - children: Content to wrap (required)
 * - className: Additional CSS classes for the container
 * - borderColor: Color of the border (default: "black")
 * - animationDuration: Duration of each line animation in seconds (default: 0.15)
 * - delay: Delay before animation starts after entering viewport (default: 0)
 */
