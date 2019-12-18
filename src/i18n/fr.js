export default {
  resources: {
    menu: {
      composters: 'Composteurs',
      users: 'Utilisateurs'
    },
    composters: {
      search: 'Rechercher un composteur',
      name: 'Composteur |||| Composteurs',
      fields: {
        name: 'Nom',
        mc: 'Maître composteur',
        pavilionsVolume: 'Équipement',
        openingProcedures: 'Procédure d‘ouverture',
        financeur: 'Financeur propriétaire de l’équipement',
        permanencesDescription: 'Permanences',
        acceptNewMembers: 'Accepte de nouveaux membres',
        serialNumber: 'Numéro de série',
        plateNumber: 'Numéro de plaque',
        description: 'Description',
        publicDescription: 'Description publique',
        address: 'Adresse',
        pole: 'Pôle',
        lat: 'Latitude',
        lng: 'Longitude',
        status: 'Statut',
        enumStatus: {
          active: 'En activité',
          delete: 'Supprimé',
          moved: 'Déplacé',
          toBeMoved: 'À déplacer',
          dormant: 'En dormance',
          inProject: 'En projet'
        },
        broyatLevel: 'Niveau de broyat',
        enumBroyat: {
          empty: 'Vide',
          reserve: 'Sur la réserve',
          full: 'Plein'
        },
        nbFoyersPotentiels: 'Nombre de foyers potentiels',
        nbInscrit: 'Nombre d’inscrits',
        nbDeposant: 'Nombre de déposants',
        signaletiqueRond: 'Signalétique rond',
        signaletiquePanneau: 'Signalétique panneau',
        hasCroc: 'Croc',
        hasCadenas: 'Cadenas',
        hasFourche: 'Fourche',
        hasThermometre: 'Thermométre',
        hasPeson: 'Peson'
      }
    },
    users: {
      search: 'Rechercher un pseudo',
      name: 'Utilisateur |||| Utilisateurs',
      fields: {
        plainPassword: 'Mot de passe',
        email: 'Email',
        phone: 'N° de téléphone',
        username: 'Pseudo',
        lastname: 'Nom',
        firstname: 'Prénom',
        fullname: 'Nom complet',
        roles: 'Rôles',
        enumRoles: {
          admin: 'Administrateur',
          user: 'Utilisateur'
        },
        enabled: 'Activer cet utilisateur',
        isEnabled: 'Utilisateur actif',
        enumDroits: {
          referer: 'Référent',
          opener: 'Ouvreur'
        }
      }
    },
    contacts: {
      name: 'Contact |||| Contacts',
      fields: {
        email: 'Email',
        phone: 'N° de téléphone',
        username: 'Pseudo',
        lastName: 'Nom',
        firstName: 'Prénom',
        role: 'Fonction'
      }
    },
    permanences: {
      name: 'Permanence |||| Permanences',
      fields: {
        canceled: 'Annulé',
        openers: 'Ouvreurs',
        eventTitle: 'Titre de l‘événement',
        eventMessage: 'Description de l‘événement',
        nbUsers: 'Nombre d‘utilisateurs',
        nbBuckets: 'Nombre de bio seaux',
        temperature: 'Température'
      }
    },
    reparations: {
      name: 'Réparation |||| Réparations',
      fields: {
        done: 'Reparé'
      }
    },
    user_composters: {
      name: 'Utilisateur du composteur |||| Utilisateurs du composteur',
      fields: {
        user: 'Utilisateur',
        composter: 'Composteur',
        capability: 'Droit'
      }
    },
    equipements: {
      name: 'Équipement |||| Équipements',
      fields: {
        type: 'Type',
        capacite: 'Capacité'
      }
    },
    financeurs: {
      fields: {
        name: 'Nom',
        initials: 'Initiales',
        id: 'Composteurs'
      }
    },
    livraison_broyats: {
      fields: {
        quantite: 'Quantité ( en litre )',
        composter: 'Composteur'
      }
    }
  }
}
