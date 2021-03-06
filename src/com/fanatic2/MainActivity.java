package com.fanatic2;

import android.app.Activity;
import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import com.fanatic2.R;

public class MainActivity extends Activity {
	WebView mWebView;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
                
        mWebView = (WebView) findViewById(R.id.webview);
        mWebView.setWebViewClient(new AppClient());
        mWebView.getSettings().setJavaScriptEnabled(true);
        mWebView.getSettings().setDomStorageEnabled(true);
        mWebView.getSettings().setAllowUniversalAccessFromFileURLs(true);
        mWebView.getSettings().setAllowFileAccessFromFileURLs(true);
        
        mWebView.loadUrl("file:///android_asset/www/index.html");
        
        
    }

    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if ((keyCode == KeyEvent.KEYCODE_BACK) && mWebView.canGoBack()) {
            mWebView.goBack();            
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }
   
    private class AppClient extends WebViewClient {
    	
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
        	System.out.println("URL: " + url);
        	view.loadUrl("javascript:changeLocation('" + url + "')");
            return true;
        }
    }
}