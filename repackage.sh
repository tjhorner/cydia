git fetch origin gh-pages
git merge FETCH_HEAD
./update.sh
git add --all
git commit -m "Update"
git push origin gh-pages
