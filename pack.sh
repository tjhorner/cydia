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
dpkg-deb -b -Zgzip "bLock"
dpkg-deb -b -Zgzip "LsSlashes"
dpkg-deb -b -Zgzip "CataracsTinyMod"

dpkg-deb -b -Zgzip "iReaperrr's Boot Logos"
dpkg-deb -b -Zgzip "iReaperrr's LockGlyph Themes"
dpkg-deb -b -Zgzip "iReaperrr's Zeppelin Themes"

mv *.deb ../deb
cd ..
dpkg-scanpackages -m . /dev/null > Packages
bzip2 Packages
