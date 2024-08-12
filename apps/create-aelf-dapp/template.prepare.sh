rm -rf ./lib/generator/templates
cd ../aelf-template
git ls-files > filelist.txt
rsync -av --files-from=filelist.txt ./ ../create-aelf-dapp/lib/generator/templates
