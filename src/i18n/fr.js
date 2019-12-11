export default {
  resources: {
    composters: {
      name: 'Composteur |||| Composteures',
      fields: {
        mc: 'Maître composteur',
        pavilionsVolume: 'Équipement',
        openingProcedures: 'Procédure d‘ouverture',
        financeur: 'Financeur propriétaire de l’équipement',
        permanencesDescription: 'Permanences',
        acceptNewMembers: 'Accepte de nouveaux membres',
        serialNumber: 'Numéro de série',
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
        }
      }
    },
    users: {
      name: 'Utilisateur |||| Utilisateurs',
      fields: {
        email: 'Email',
        phone: 'N° de téléphone',
        username: 'Pseudo',
        lastname: 'Nom',
        firstname: 'Prénom',
        role: 'Fonction'
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
    user_composters: {
      name: 'Utilisateur du composteur |||| Utilisateurs du composteur',
      fields: {
        capability: 'Droit'
      }
    },
    equipements: {
      name: 'Équipement |||| Équipements',
      fields: {
        type: 'Type',
        capacite: 'Capacité'
      }
    }
  }
}
