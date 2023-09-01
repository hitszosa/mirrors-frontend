import { ResourceDirectory } from './DownloadResourceStore'

export const mockResourceDirectories: ResourceDirectory = {
    LiveCD: {
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
    },
    Software: {
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
    },
}
