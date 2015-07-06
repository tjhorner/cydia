cd debs
rm -r *.deb
cd ..
rm -r Packages.bz2
cd unpackaged

dpkg-deb -b -Zgzip "AndroidAnalogClock"
dpkg-deb -b -Zgzip "mnl"
dpkg-deb -b -Zgzip "OnePlusOneLS"
dpkg-deb -b -Zgzip "SanFrancisco"
dpkg-deb -b -Zgzip "TestTweak"
dpkg-deb -b -Zgzip "EverythingiInstall"

mv *.deb ../debs
cd ..
dpkg-scanpackages -m . /dev/null > Packages
bzip2 Packages
