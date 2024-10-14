document.addEventListener('DOMContentLoaded', () => {
    const roleSelect = document.getElementById('role');
    const roleDescription = document.getElementById('roleDescription');
    const roleDisplay = document.getElementById('roleDisplay');
    const loverDisplay = document.getElementById('loverDisplay');
    const deadDisplay = document.getElementById('deadDisplay');
    const captainDisplay = document.getElementById('captainDisplay');
    const toggleInfoButton = document.getElementById('toggleInfo');
    const infoDisplay = document.getElementById('infoDisplay');
    const cardFront = document.getElementById('cardFront');
    const cardBack = document.getElementById('cardBack');
    const capitaine = document.getElementById('capitaine'); 
    const toggleLoverButton = document.getElementById('toggleLover');
    const toggleDeathButton = document.getElementById('toggleDeath');
    const toggleCaptainButton = document.getElementById('toggleCaptain');

    let isLover = false;
    let isDead = false;
    let isCaptain = false;

    const rolesInfo = {
        "villageois": {
            description: "Un villageois n'a pas de pouvoir spécial.",
            img: "images/villageois-c.png"
        },
        "observateur": {
            description: "Un observateur peut voir le rôle d'un joueur chaque nuit.",
            img: "images/observateur-c.png"
        },
        "scientifique": {
            description: "Un scientifique peut sauver ou tuer une fois par partie un joueur.",
            img: "images/scientifique-c.png"
        },
        "petite_fille": {
            description: "La petite fille peut espionner sans se faire prendre durant la réunion des infiltrés.",
            img: "images/petite_fille.png"
        },
        "entremetteur": {
            description: "L'entremetteur choisit deux joueurs comme amoureux.",
            img: "images/entremetteur-c.png"
        },
        "chasseur": {
            description: "Le chasseur peut tuer un joueur lors de sa mort.",
            img: "images/chasseur-c.png"
        },
        "voleur": {
            description: "Le voleur peut choisir entre deux rôles au début de la partie, infiltré ou villageois.",
            img: "images/voleur-c.png"
        },
        "bouc_emissaire": {
            description: "Le bouc émissaire est tué en cas d'égalité.",
            img: "images/bouc_emissaire-c.png"
        },
        "idiot": {
            description: "L’idiot du village peut continuer de donner son avis même tué.",
            img: "images/idiot-c.png"
        },
        "joueur_de_flute": {
            description: "Le joueur de flûte peut séduire deux joueurs par tour et gagne quand ils le sont tous.",
            img: "images/joueur_de_flute-c.png"
        },
        "capitaine": {
            description: "Le capitaine a un vote double.",
            img: "images/capitaine.png"
        }
    };

    function updateDisplay() {
        roleDisplay.textContent = `Rôle: ${roleSelect.value}`;
        loverDisplay.textContent = `Amoureux: ${isLover ? 'Oui' : 'Non'}`;
        deadDisplay.textContent = `Mort: ${isDead ? 'Oui' : 'Non'}`;
        captainDisplay.textContent = `Capitaine: ${isCaptain ? 'Oui' : 'Non'}`;
        
        if (isCaptain) {
            capitaine.classList.remove('hidden');
        } else {
            capitaine.classList.add('hidden');
        }

        const selectedRole = roleSelect.value;
        const { description, img } = rolesInfo[selectedRole];
        roleDescription.textContent = description;
        cardFront.src = img;
    }

    roleSelect.addEventListener('change', () => {
        updateDisplay();
        cardBack.classList.add('hidden');
        cardFront.classList.remove('hidden');
    });

    toggleLoverButton.addEventListener('click', () => {
        isLover = !isLover;
        updateDisplay();
    });

    toggleDeathButton.addEventListener('click', () => {
        isDead = !isDead;
        updateDisplay();
    });

    toggleCaptainButton.addEventListener('click', () => {
        isCaptain = !isCaptain;
        updateDisplay();
    });

    toggleInfoButton.addEventListener('click', () => {
        infoDisplay.style.display = infoDisplay.style.display === 'none' ? 'block' : 'none';
        roleSelect.style.display = roleSelect.style.display === 'block' ? 'none' : 'block'; // Masquer le sélecteur

        if (infoDisplay.style.display === 'block') {
            cardBack.classList.add('hidden');
            cardFront.classList.remove('hidden');
            roleDescription.classList.remove('hidden');
            drole.classList.remove('hidden');
        } else {
            cardBack.classList.remove('hidden');
            cardFront.classList.add('hidden');
            roleDescription.classList.add('hidden');
            drole.classList.add('hidden');


        }
        updateDisplay();
    });

    updateDisplay();
});
