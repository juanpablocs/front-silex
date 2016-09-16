<?php
/**
 * @author Juan Pablo <juanpablocs21@gmail.com
 * @date 16/09/16.
 */
 
require_once __DIR__.'/../vendor/autoload.php'; 

$app = new Silex\Application(); 

$app->register(new Silex\Provider\TwigServiceProvider(), [
  'twig.path' => __DIR__.'/../frontend/views',
]);

$app['debug'] = true;

$app->get('/', function() use($app) { 
  // return 'Hello  World'; 
  return $app['twig']->render('index.twig', array(
    'name' => 'Juan',
  ));
}); 

$app->run(); 