import "./LegalMentions.css";
import video from "../../../assets/images/videos/background.mp4";

function LegalMentions() {
  return (
    <section id="legal-mentions">
      <video autoPlay muted loop playsInline id="backgroundVideo">
        <source src={video} type="video/mp4" />
      </video>
      <h1>Mentions légales</h1>
      <div className="legal-mentions-div">
      <h2>1. Éditeur du site</h2>
      <p>
        Le site Gems est édité par Coline Grosso, Mickael Beaugrand, Curtis
        Dakouri, Maxime Maufront, domicilié au 44 Rue Alphonse Penaud 75020
        Paris.
      </p>
      <h2>2. Directeur de la publication</h2>
      <p>
        Coline Grosso, en sa qualité de Développeur web, est responsable de la
        publication sur le site Gems.
      </p>
      <h2>3. Propriété intellectuelle</h2>
      <p>
        Le contenu du site Gems, incluant mais sans s'y limiter les textes,
        images, graphismes, logos, marques, et tout autre élément, est la
        propriété exclusive de Gems ou de ses partenaires. Toute reproduction,
        représentation, modification, publication, adaptation de tout ou partie
        des éléments du site, quel que soit le moyen ou le procédé utilisé, est
        interdite, sauf autorisation écrite préalable de Gems.
      </p>
      <h2>4. Protection des données personnelles</h2>
      <p>
        Les données personnelles collectées sur ce site sont traitées
        conformément à notre politique de confidentialité accessible à "lien
        vers la politique de confidentialité". Vous disposez d'un droit d'accès,
        de rectification et de suppression des données vous concernant, que vous
        pouvez exercer en nous contactant à contact@gems.com.
      </p>
      <h2>5. Cookies</h2>
      <p>
        Ce site utilise des cookies pour améliorer votre expérience utilisateur.
        En naviguant sur ce site, vous acceptez l'utilisation de cookies
        conformément à notre politique de cookies.
      </p>
      <h2>6. Contact</h2>
      <p>
        Pour toute question ou demande d'information concernant ce site,
        veuillez nous contacter à l'adresse suivante : contact@gems.fr.
      </p>
      <h2>7. Droit applicable et juridiction compétente</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas
        de litige, les tribunaux français seront seuls compétents.
      </p>
      </div>
    </section>
  );
}

export default LegalMentions;
