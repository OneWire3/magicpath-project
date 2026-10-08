import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Heart, Sparkles } from 'lucide-react';
const floatingHearts = [{
  id: 'heart-a',
  left: '7%',
  delay: '0s',
  duration: '13s',
  size: '18px',
  tone: '#FFB3C6'
}, {
  id: 'heart-b',
  left: '18%',
  delay: '3s',
  duration: '16s',
  size: '12px',
  tone: '#FF4D6D'
}, {
  id: 'heart-c',
  left: '31%',
  delay: '7s',
  duration: '14s',
  size: '22px',
  tone: '#F58EA8'
}, {
  id: 'heart-d',
  left: '49%',
  delay: '1s',
  duration: '18s',
  size: '14px',
  tone: '#FFB3C6'
}, {
  id: 'heart-e',
  left: '66%',
  delay: '5s',
  duration: '15s',
  size: '19px',
  tone: '#FF4D6D'
}, {
  id: 'heart-f',
  left: '80%',
  delay: '9s',
  duration: '17s',
  size: '13px',
  tone: '#F58EA8'
}, {
  id: 'heart-g',
  left: '92%',
  delay: '2s',
  duration: '14s',
  size: '17px',
  tone: '#FFB3C6'
}];
const burstHearts = [{
  id: 'burst-1',
  x: '-115px',
  y: '-55px',
  rotate: '-22deg',
  delay: '0ms'
}, {
  id: 'burst-2',
  x: '110px',
  y: '-68px',
  rotate: '28deg',
  delay: '80ms'
}, {
  id: 'burst-3',
  x: '-88px',
  y: '48px',
  rotate: '-38deg',
  delay: '130ms'
}, {
  id: 'burst-4',
  x: '92px',
  y: '56px',
  rotate: '35deg',
  delay: '180ms'
}, {
  id: 'burst-5',
  x: '0px',
  y: '-105px',
  rotate: '8deg',
  delay: '220ms'
}];
export function RomanticProposal() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noHovered, setNoHovered] = useState(false);
  return <main className={`proposal-page${envelopeOpened ? ' letter-is-open' : ''}`}>
      <div className="atmosphere" aria-hidden="true">
        {floatingHearts.map(heart => <span key={heart.id} className="floating-heart" style={{
        left: heart.left,
        animationDelay: heart.delay,
        animationDuration: heart.duration,
        fontSize: heart.size,
        color: heart.tone
      }}>
            <Heart fill="currentColor" strokeWidth={1.2} />
          </span>)}
      </div>

      <div className="proposal-stage">
        <section className={`envelope-scene${envelopeOpened ? ' is-open' : ''}`} aria-labelledby="envelope-title">
          <p className="envelope-kicker">Une surprise délicate</p>
          <h1 id="envelope-title" className="envelope-title">Un petit mot attend d'être ouvert.</h1>
          <button className="envelope-button" type="button" onClick={() => setEnvelopeOpened(true)} aria-controls="proposal-letter" aria-expanded={envelopeOpened} disabled={envelopeOpened}>
            <span className="envelope-letter" aria-hidden="true">
              <span className="letter-line letter-line-one"></span>
              <span className="letter-line letter-line-two"></span>
              <span className="letter-line letter-line-three"></span>
            </span>
            <span className="envelope-body" aria-hidden="true">
              <span className="envelope-flap"></span>
              <span className="envelope-pocket"></span>
              <span className="envelope-left-fold"></span>
              <span className="envelope-right-fold"></span>
            </span>
            <span className="wax-seal" aria-hidden="true">
              <Heart fill="currentColor" size={28} strokeWidth={1.5} />
            </span>
            <span className="envelope-action">Clique sur le sceau</span>
          </button>
        </section>

        {envelopeOpened && <section id="proposal-letter" className="proposal-shell" aria-labelledby="proposal-title">
            <div className="petal petal-top-left" aria-hidden="true"><span>✦</span></div>
            <div className="petal petal-top-right" aria-hidden="true"><span>♡</span></div>
            <div className="petal petal-bottom-left" aria-hidden="true"><span>♡</span></div>
            <div className="petal petal-bottom-right" aria-hidden="true"><span>✦</span></div>

            <div className="eyebrow"><Sparkles size={14} strokeWidth={1.5} /><span>une lettre pour toi</span><Sparkles size={14} strokeWidth={1.5} /></div>
            <div className="seal" aria-hidden="true"><Heart fill="currentColor" size={27} strokeWidth={1.5} /></div>
            <p className="overline">Une question importante...</p>
            <h2 id="proposal-title">Tu es la plus belle<br /><em>chose</em> qui me soit arrivée.</h2>
            <div className="rule" aria-hidden="true"><span></span><Heart fill="currentColor" size={15} /><span></span></div>
            <p className="message">Depuis que tu es entrée dans ma vie, même les jours ordinaires ont un petit goût de magie. Ton sourire rend le monde plus doux, et j'aimerais beaucoup découvrir les prochains chapitres à tes côtés.</p>
            <p className="question">Est-ce que tu voudrais sortir avec moi&nbsp;?</p>

            <div className="actions" aria-label="Choisir une réponse">
              <button className="yes-button" type="button" onClick={() => setAccepted(true)}>
                <span>Oui</span><span aria-hidden="true">💖</span>
              </button>
              <button className={`no-button${noHovered ? ' is-escaping' : ''}`} type="button" aria-label="Non, réponse difficile à trouver" onMouseEnter={() => setNoHovered(true)} onMouseLeave={() => setNoHovered(false)} onFocus={() => setNoHovered(true)} onBlur={() => setNoHovered(false)}>
                <span>Non</span>
              </button>
            </div>
            <p className="hint">Prends ton temps... mais pas trop quand même <span aria-hidden="true">☺</span></p>
            <p className="footer-note">La bonne réponse est évidente 😉</p>

            {accepted && <div className="celebration" role="status" aria-live="polite">
                <div className="burst" aria-hidden="true">
                  {burstHearts.map(heart => <Heart key={heart.id} className="burst-heart" fill="currentColor" style={{
              '--burst-x': heart.x,
              '--burst-y': heart.y,
              '--burst-rotate': heart.rotate,
              animationDelay: heart.delay
            } as CSSProperties} />)}
                </div>
                <div className="celebration-card">
                  <Heart fill="currentColor" size={22} />
                  <span>Je savais que tu dirais oui.</span>
                  <Heart fill="currentColor" size={22} />
                </div>
              </div>}
          </section>}
      </div>
    </main>;
}