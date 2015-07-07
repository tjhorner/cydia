rm -r *.bz2
cd deb
rm -r *.deb
cd ../src

dpkg-deb -b -Zgzip "AndroidAnalogClock"
dpkg-deb -b -Zgzip "mnl"
dpkg-deb -b -Zgzip "OnePlusOneLS"
dpkg-deb -b -Zgzip "SanFrancisco"
dpkg-deb -b -Zgzip "TestTweak"
dpkg-deb -b -Zgzip "EverythingiInstall"

mv *.deb ../deb
cd ..
dpkg-scanpackages -m . /dev/null > Packages
bzip2 Packages
