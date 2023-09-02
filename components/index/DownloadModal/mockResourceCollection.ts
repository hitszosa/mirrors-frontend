import { ResourceCollection } from './DownloadStore'

const mockResourceCollection: ResourceCollection = {
  Fedora: [
    {
      name: 'Fedora 38 Workstation',
      link: '/',
    },
    {
      name: 'Fedora 37 Workstation',
      link: '/',
    },
  ],
  Ubuntu: [
    {
      name: 'Ubuntu 23.04 (amd64)',
      link: '/',
    },
    {
      name: 'Ubuntu 23.04 (i386)',
      link: '/',
    },
  ],
  TeX: [
    {
      name: 'TeX Live 2023',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
  ],
  Testttttttttttt: [
    {
      name: 'TesttttttttttttTesttttttttttttTestttttttttttt',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'TesttttttttttttTesttttttttttttTestttttttttttt',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'TesttttttttttttTesttttttttttttTestttttttttttt',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'TesttttttttttttTesttttttttttttTestttttttttttt',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'TesttttttttttttTesttttttttttttTestttttttttttt',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
    {
      name: 'MacTeX 20230314',
      link: '/',
    },
  ],
  Dummy1: [],
  Dummy2: [],
  Dummy3: [],
}

export const fetchMockResourceCollection = async () => {
  await new Promise(r => setTimeout(r, 500))
  return mockResourceCollection
}
