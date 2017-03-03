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
    title: 'Minifestival',
    date: '22.02.2017',
    location: 'Aula des Marie-Curie-Gymnasiums',
    client: 'Abijahrgang 2017',
    contact: 'Marc Nitzsche, Flo Geißler',
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
      id: '1',
      fields: [
        {
          label: 'title',
          value: 'Gravity',
        },
        {
          label: 'description',
          value: 'Song von Sara Bareilles',
        },
        {
          label: 'length',
          value: '5 Minuten',
        },
        {
          label: 'artist',
          value: 'Rebecca Schönknecht',
        },
        {
          label: 'requirements',
          value: '1 HH, Piano',
        },
      ],
    },
    {
      id: '2',
      fields: [
        {
          label: 'title',
          value: 'Imagine',
        },
        {
          label: 'description',
          value: 'Song von John Lennon',
        },
        {
          label: 'length',
          value: '3 Minuten',
        },
        {
          label: 'artist',
          value: 'Flo Geißler, Vera Gennrich',
        },
        {
          label: 'requirements',
          value: '2 HH, DI-Box',
        },
      ],
    },
    {
      id: '3',
      fields: [
        {
          label: 'title',
          value: 'Probleme',
        },
        {
          label: 'description',
          value: 'Das ist echte Lyrik.',
        },
        {
          label: 'length',
          value: '4 Minuten',
        },
        {
          label: 'artist',
          value: 'Lucas Schemenz',
        },
        {
          label: 'requirements',
          value: '1 HH, Mikrofonständer',
        },
      ],
    }
  ],
};
