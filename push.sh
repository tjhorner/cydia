git fetch origin gh-pages
git merge FETCH_HEAD
./repack.sh
git add --all
git commit -m "Update"
git push origin gh-pages
