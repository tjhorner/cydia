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
cd debs
dpkg-scanpackages -m . /dev/null > ../Packages
cd ..
bzip2 Packages
