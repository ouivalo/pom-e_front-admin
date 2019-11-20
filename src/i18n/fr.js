export default {
  resources: {
    composters: {
      name: 'Composteur |||| Composteures',
      fields: {
        mc: 'Maitre composteur',
        pavilionsVolume: 'Equipement',
        openingProcedures: 'Précédure d‘ouverture'
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
        capability: 'droit'
      }
    }
  }
}
