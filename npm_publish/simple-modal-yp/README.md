# simple-modal-yp (english)

A simple modal component for React 18, designed to be easy to integrate and use in your projects.

![Modal Example](https://raw.githubusercontent.com/Nox57/P14_HRnet_PAREL_Yannick/main/npm_publish/simple-modal-yp/img/example.png)

## 🚀 Installation

Use the following command to install `simple-modal-yp`:

```bash
npm install simple-modal-yp
```

or

```bash
yarn add simple-modal-yp
```

## 🛠 Usage

```jsx
import React, { useState } from 'react'
import Modal from 'simple-modal-yp'

function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                closeOnOverlayClick={true}
                width="500px"
                closeButtonText="Fermer"
            >
                <h2>Modal Title</h2>
                <p>Modal content</p>
            </Modal>
        </>
    )
}
```

## 🧰 Props

-   `isOpen` (boolean, required): Determines whether the modal is open or closed.
-   `onClose` (function, required): Function called when the modal is closed.
-   `children` (node): Modal content.
-   `className` (string, optional): Additional CSS class for the modal overlay.
-   `closeOnOverlayClick` (boolean, optional, default=true): Determines whether clicking on the overlay closes the modal.
-   `width` (string, optional, default='500px'): Width of the modal content.
-   `closeButtonText` (string, optional, default='Close'): Text for the close button.

## 🎨 Style Customization

The modal's style can be easily customized by overriding the following CSS classes:

-   `.modal-overlay`: For the modal overlay.
-   `.modal-content`: For the modal content.
-   `.modal-close`: For the close button.

## ✒️ Author

-   [Nox57](https://github.com/Nox57/)

## 📜 Licence

    This project is licensed under the MIT License.

# simple-modal-yp (french)

Un composant modal simple pour React 18, conçu pour être facile à intégrer et à utiliser dans vos projets.

![Exemple de Modal](https://raw.githubusercontent.com/Nox57/P14_HRnet_PAREL_Yannick/main/npm_publish/simple-modal-yp/img/example.png)

## 🚀 Installation

Utilisez la commande suivante pour installer `simple-modal-yp` :

```bash
npm install simple-modal-yp
```

ou

```bash
yarn add simple-modal-yp
```

## 🛠 Utilisation

```jsx
import React, { useState } from 'react'
import Modal from 'simple-modal-yp'

function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Ouvrir la modal</button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                closeOnOverlayClick={true}
                width="500px"
                closeButtonText="Fermer"
            >
                <h2>Titre de la modal</h2>
                <p>Contenu de la modal</p>
            </Modal>
        </>
    )
}
```

## 🧰 Propriétés

-   `isOpen` (booléen, requis): Détermine si la modal est ouvert ou fermé.
-   `onClose` (fonction, requis): Fonction appelée lors de la fermeture du modal.
-   `children` (noeud): Contenu de la modal.
-   `className` (chaîne, optionnel): Classe CSS supplémentaire pour l'overlay de la modal.
-   `closeOnOverlayClick` (booléen, optionnel, défaut=`true`): Détermine si un clic sur l'overlay ferme la modal.
-   `width` (chaîne, optionnel, défaut=`'500px'`): Largeur du contenu de la modal.
-   `closeButtonText` (chaîne, optionnel, défaut=`'Close'`): Texte du bouton de fermeture.

## 🎨 Personnalisation du Style

Le style de la modal peut être facilement personnalisé en surchargeant les classes CSS suivantes :

-   `.modal-overlay`: Pour l'overlay de la modal.
-   `.modal-content`: Pour le contenu de la modal.
-   `.modal-close`: Pour le bouton de fermeture.

## ✒️ Auteur

-   [Nox57](https://github.com/Nox57/)

## 📜 Licence

Ce projet est sous licence MIT.
