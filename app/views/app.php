<!DOCTYPE html>
<html class="no-js">
    <head>
        <title>Consult Conduit</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon(s) in the root directory -->

        <link rel="stylesheet" href="<?= asset('css/style.css') ?>">
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
    <body ng-cloak>
        <div ng-controller='AppCtrl'>
            <div ng-include="'<?= asset('js/app/templates/header.html') ?>'"></div>

            <div class='message' ng-include="'<?= asset('js/app/templates/message.html') ?>'"></div>

            <div ng-view class='ssk-container' id='view'></div>    
        </div>
        <script data-main="<?= asset('js/main.js') ?>" src="<?= asset('js/bower_components/requirejs/require.js') ?>"></script>
    </body>
</html>
