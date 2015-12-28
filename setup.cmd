powershell -NoProfile -ExecutionPolicy unrestricted -Command "&{iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.ps1'))}"

call npm install -g bower
call npm install -g babel-cli

call %userprofile%\.dnx\bin\dnvm install 1.0.0-rc1-final
call %userprofile%\.dnx\bin\dnvm upgrade
call %userprofile%\.dnx\bin\dnvm update-self
call %userprofile%\.dnx\bin\dnvm list
call %userprofile%\.dnx\bin\dnvm use 1.0.0-rc1-final
call %userprofile%\.dnx\runtimes\dnx-clr-win-x86.1.0.0-rc1-final\bin\dnu restore

cd servers\frontend\aspnet5\FSharp.ProjectTemplate.Web
call npm install
call bower install
call %userprofile%\.dnx\runtimes\dnx-clr-win-x86.1.0.0-rc1-final\bin\dnu restore
cd ..\..\..\..\

echo "Finished" > setup_done.txt
