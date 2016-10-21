About the Testing Web Application
=================================

1. Server-side framework
[Ruby (2.1.5) on Rails (4.1)] (http://railsinstaller.org/en). The reson for choosing this framework was it is new and widely being used with a larger support community. It is always good to learn new technologies.

2. Client-side framework
[AngularJS 1.5.0] (https://angularjs.org/). The reason for choosing AngularJS is because it is good for quick prototyping and dynamic single-webpage applications. It also provides two way data binding.

3. The interaction with the database while creating the app and integration with AngularJS with the help of gems is easy.

4. Deployment and installation of the third party dependencies required for the app was the hardest part.

5. NodeJS was also used so as to overcome the problem of inclusion of some of the javascript files of the app.

6. 
Runnung on localhost
--------------------

First we need to start the postgresql server with the following command:

* su postgres -c 'pg_ctl start -D /usr/local/pgsql/data -l serverlog'

bundle installation is performed with the help of following command:

* bundle install

Database creation and migration, assuming that postgresql is configured with the superuser "postgres" and password "password", and run the following command:

* rake db:create db:migrate

Now starting the rails webrick server, type the command from within the app directory:

* rails s

Now go to the web browser and type in the URL bar to see the app in action:

* localhost:3000

Deploying on git
----------------
* git init
* git add .
* git commit -m "First commit"
* git remote add origin remote repository URL
* git push origin master

Deploying on Heroku
-------------------

* git push heroku master
* heroku open 
