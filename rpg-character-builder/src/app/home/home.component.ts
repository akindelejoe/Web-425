import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <article class="home">
      <h1>Welcome to the RPG Character Builder</h1>
      <p>
        Every hero’s story begins with a single choice, and in this
        application you will create characters that can live inside
        countless adventures. The RPG Character Builder provides a
        simple way to select classes, assign skills, and imagine the
        background that shapes your journey. Whether you want to design
        a fearless warrior, a cunning mage, or a loyal ranger, the tools
        here allow you to bring that vision to life.
      </p>
      <p>
        The purpose of this landing page is to introduce the idea of
        world-building and to help new players get started. Role-playing
        games can feel complex, but the builder guides you step by step.
        It explains how attributes like strength, wisdom, or agility
        affect a character’s path. You can experiment with combinations
        and immediately see how those choices influence your potential
        storylines. This hands-on approach makes learning interactive
        and enjoyable.
      </p>
      <p>
        Another advantage is flexibility. You may prefer fast combat
        with high action, or slow campaigns focused on dialogue and
        discovery. The builder adapts to both styles. You can save
        multiple character sheets, revisit them later, and share ideas
        with friends. The more you explore, the more creative options
        appear. Instead of reading long manuals, you get a practical
        experience that shows how the game systems work in real time.
      </p>
      <p>
        In the gallery below you will find a few example classes.
        They represent only a small part of the possibilities waiting
        for you. The world of role-playing is limited only by your
        imagination. Begin today, build a hero, and let the adventure
        unfold.
      </p>

      <section class="gallery">
        <figure>
          <img src="/assets/warrior.png" alt="Warrior class">
          <figcaption>Warrior – strength and courage in battle.</figcaption>
        </figure>
        <figure>
          <img src="/assets/mage.png" alt="Mage class">
          <figcaption>Mage – mistress of arcane powers and spells.</figcaption>
        </figure>
        <figure>
          <img src="/assets/ranger.png" alt="Ranger class">
          <figcaption>Ranger – skilled with bow and loyal companion.</figcaption>
        </figure>
      </section>
    </article>
  `,
  styles: [`
    .home { max-width: 900px; margin: 0 auto; padding: 20px; line-height: 1.6; }
    h1 { font-family: 'Montserrat', sans-serif; text-align: center; margin-bottom: 20px; }
    p { margin-bottom: 16px; }
    .gallery { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 20px; }
    figure { flex: 1 1 260px; text-align: center; }
    img { max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2); }
    figcaption { margin-top: 8px; font-size: 0.9rem; }
  `]
})
export class HomeComponent {}
