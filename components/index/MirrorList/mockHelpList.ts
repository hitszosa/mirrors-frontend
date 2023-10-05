const mockHelpList: string[] = ['archlinux', 'archlinuxcn', 'centos', 'CRAN', 'CTAN', 'debian', 'debian-security', 'debian-cd', 'fedora', 'linux.git', 'manjaro', 'rpmfusion', 'termux', 'ubuntu', 'ubuntu-ports']

export const fetchMockHelpList = async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockHelpList
}
