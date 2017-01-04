<?php

/*
  Plugin Name: Mosaico Plugin
  Version: 1.0
  Plugin URI: http://dev.sisalert.com.br
  Description: Mosaico Example plugin
  Author: Mauricio Karrei
  Author URI: http://dev.sisalert.com.br
  License: TODO.
 */

class MosaicoPlugin {

    public function __construct() {
        
    }

    public static function install() {

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }

    public static function output() {
        ob_start();
        require(__DIR__ . '/views/index.html');
        return ob_get_clean();
    }

}

add_action('wp_print_scripts', 'register_javascript_ac_mosaico', 15);

function register_javascript_ac_mosaico() {
    global $post;
    if (has_shortcode($post->post_content, 'ac-mosaico_plugin')) {
        
        wp_enqueue_script('AngularLib', plugin_dir_url(__FILE__) . 'public/libs/angular.min.js');        
        
        wp_enqueue_script('Bootstrap', plugin_dir_url(__FILE__) . 'public/libs/bootstrap.min.js');
                      
        wp_enqueue_script('MosaicoModules', plugin_dir_url(__FILE__) . 'scripts/app.js');               
        wp_enqueue_script('MosaicoController', plugin_dir_url(__FILE__) . 'scripts/controllers/mosaico.js');        
        wp_enqueue_script('MosaicoService', plugin_dir_url(__FILE__) . 'scripts/services/mosaico.js');                
    }
}


add_action('wp_print_styles', 'register_styles_ac_mosaico', 15);

function register_styles_ac_mosaico() {
    global $post;
    if (has_shortcode($post->post_content, 'ac-mosaico_plugin')) {

        wp_enqueue_style('DefaultCss', plugin_dir_url(__FILE__) . 'public/css/style.css');
        wp_enqueue_style('BootstrapCss', plugin_dir_url(__FILE__) . 'public/css/bootstrap.min.css');

    }
}

register_activation_hook(__FILE__, array('MosaicoPlugin', 'install'));

add_shortcode('ac-mosaico_plugin', array('MosaicoPlugin', 'output'));
