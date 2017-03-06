import {
  SET_SHEET,
} from '../actionTypes';

export function setSheet(sheet) {
  return { type: SET_SHEET, sheet };
}

export function resetSheet() {
  return { type: SET_SHEET };
}

export function setExampleSheet() {
  return { type: SET_SHEET, sheet: exampleSheet };
}

const exampleSheet = {
  details: {
    general: {
      title: 'Minifestival',
      date: '10.10.2017',
      location: 'Aula des Marie-Curie-Gymnasiums',
      client: 'Abijahrgang 2017',
      contact: 'Marc Nitzsche, Flo Geißler',
    },
    schedule: {
      start: '22.02.2017 18:00 Uhr',
      rehearsal: '22.02.2017 12:30 Uhr',
      construction: '22.02.2017 07:30 Uhr',
      deconstruction: '22.02.2017 20:30 Uhr, 23.02.2017 08:00 Uhr',
    },
    requirements: [
      {
        title: 'Ton',
        body: 'Dynamische und Kondensatormikrofone, E- Piano, Verstärker, Monitore, Schlagzeugmikrofone',
      },
      {
        title: 'Licht',
        body: 'LEDs, Stufenlinsen, Gassenlicht, Jands Vista',
      },
      {
        title: 'Bühne',
        body: 'Normaler Aufbau',
      },
    ],
    additionalDetails: [
      {
        title: 'Veranstaltungskonzept',
        body: 'Die geilsten Künstler der Schule tun sich zusammen um ein Festival zu organisieren, das einem Wohnzimmerkonzert in nichts nachsteht!',
      },
      {
        title: 'Besonderheiten',
        body: 'Keine Moderation, Acts kündigen sich selber an. Wohnzimmerathmosphäre.'
      }
    ],
  },
  actions: [
    {
      id: 1,
      fields: {
        title: 'Gravity',
        description: 'Song von Sara Bareilles',
        length: '5 Minutes',
        artist: 'Rebecca Schönknecht',
        requirements: '1 HH, Piano',
      },
    },
    {
      id: 2,
      fields: {
        title: 'Imagine',
        description: 'Song von John Lennon',
        length: '3 Minutes',
        artist: 'Flo Geißler, Vera Gennrich',
        requirements: '2 HH, DI-Box',
      },
    },
    {
      id: 3,
      fields: {
        title: 'Probleme',
        description: 'Das ist echte Lyrik.',
        length: '4 Minutes',
        artist: 'Lucas Schemenz',
        requirements: '1 HH, Mikrofonständer',
      },
    }
  ],
};
