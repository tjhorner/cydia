rm -r *.deb
rm -r Packages.bz2

dpkg-deb -b -Zgzip "AndroidAnalogClock"
dpkg-deb -b -Zgzip "mnl"
dpkg-deb -b -Zgzip "OnePlusOneLS"
dpkg-deb -b -Zgzip "SanFrancisco"
dpkg-deb -b -Zgzip "TestTweak"
dpkg-deb -b -Zgzip "EverythingiInstall"

dpkg-scanpackages -m . /dev/null > Packages
bzip2 Packages
