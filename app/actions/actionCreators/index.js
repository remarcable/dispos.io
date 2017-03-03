import {
  SET_SHEET,
} from '../actionTypes';

export function setSheet(sheet) {
  return { type: SET_SHEET, sheet };
}

export function setExampleSheet() {
  return { type: SET_SHEET, sheet: exampleSheet };
}

const exampleSheet = {
  name: 'Minifestival',
  date: new Date('10.10.2017'),
  location: 'Aula des Marie-Curie-Gymnasiums',
  client: 'Abijahrgang 2017',
  contact: 'Marc Nitzsche, Flo Geißler',
  details: {
    schedule: {
      start: new Date('22.02.2017 18:00 Uhr'),
      rehearsal: [new Date('22.02.2017 12:30 Uhr')],
      construction: [new Date('22.02.2017 07:30 Uhr')],
      deconstruction: [new Date('22.02.2017 20:30 Uhr'), new Date('23.02.2017 08:00 Uhr')],
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
      title: 'Gravity',
      description: 'Song von Sara Bareilles',
      length: 300, // seconds
      artist: ['Rebecca Schönknecht'],
      requirements: '1 HH, Piano',
    },
  ],
};
