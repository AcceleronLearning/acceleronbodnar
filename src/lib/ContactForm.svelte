<!-- <script>
import { getContent, RenderContent } from '@builder.io/sdk-svelte';

// Add your public API key
const BUILDER_PUBLIC_API_KEY = YOUR_API_KEY;

let content = undefined;
const fetch = async () => {
  // fetch your Builder content
  content = await getContent({
    // Add the model name for the section you want.
    // Here it's announcement-bar
    model: 'contact-form',
    apiKey: BUILDER_PUBLIC_API_KEY
  });
};

fetch();
</script> -->

<section class="aq-block dark-wrapper">
      <div class="container">
        <div class="row">
          <div id="aq-block-1689-6"
            class="aq-block aq-block-aq_section_title_block col-sm-12 aq-first aq-last ">
            <div class="">
              <h1 class="">Contact Us</h1>
            </div>
          </div>
          <div id="aq-block-1689-7" class="aq-block aq-block-aq_spacer_block col-sm-12 aq-first aq-last ">
            <div style="clear: both; width: 100%; height: 40px;"></div>

          </div>
          <div id="aq-block-1689-8"
            class="aq-block aq-block-aq_contact_form_block col-sm-12 aq-first aq-last ">
            <h5>sales@acceleronlearning.com | (915) 203-2362</h5>
            <div class="form-wrapper clearfix">
              <div class="form-contact email-form text-center">
                <div role="form" class="wpcf7" id="wpcf7-f799-p256-o1" lang="en-US" dir="ltr">
                  <div class="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                    <ul></ul>
                  </div>
                  <form action="index.html#wpcf7-f799-p256-o1" method="post"
                    class="wpcf7-form init" novalidate="novalidate" data-status="init">
                    <div style="display: none;">
                      <input type="hidden" name="_wpcf7" value="799" />
                      <input type="hidden" name="_wpcf7_version" value="5.6.4" />
                      <input type="hidden" name="_wpcf7_locale" value="en_US" />
                      <input type="hidden" name="_wpcf7_unit_tag"
                        value="wpcf7-f799-p256-o1" />
                      <input type="hidden" name="_wpcf7_container_post" value="256" />
                      <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                    </div>
                    <p>Your Name (required):<br />
                      <span class="wpcf7-form-control-wrap" data-name="your-name"><input
                          type="text" name="your-name" value="" size="40"
                          class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true" aria-invalid="false" /></span>
                    </p>
                    <p>Organization (required):<br />
                      <span class="wpcf7-form-control-wrap" data-name="organization"><input
                          type="text" name="organization" value="" size="40"
                          class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true" aria-invalid="false" /></span>
                    </p>
                    <p>Email (required):<br />
                      <span class="wpcf7-form-control-wrap" data-name="your-email"><input
                          type="email" name="your-email" value="" size="40"
                          class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                          aria-required="true" aria-invalid="false" /></span>
                    </p>
                    <p>I am...<br />
                      <span class="wpcf7-form-control-wrap"
                        data-name="InstitutionType"><select name="InstitutionType"
                          class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                          aria-required="true" aria-invalid="false">
                          <option value="Corrections/Social Services">Corrections/Social
                            Services</option>
                          <option value="K-12/Higher Ed">K-12/Higher Ed</option>
                          <option value="Business/Organization">Business/Organization
                          </option>
                          <option value="Individual">Individual</option>
                          <option value="Other">Other</option>
                        </select></span>
                    </p>
                    <p>Institution Size:<br />
                      <span class="wpcf7-form-control-wrap"
                        data-name="InstitutionSize"><select name="InstitutionSize"
                          class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                          aria-required="true" aria-invalid="false">
                          <option value="1+">1+</option>
                          <option value="10+">10+</option>
                          <option value="100+">100+</option>
                          <option value="1,000+">1,000+</option>
                          <option value="10,000+">10,000+</option>
                        </select></span>
                    </p>
                    <p>I'm Interested In...<br />
                      <span class="wpcf7-form-control-wrap" data-name="IWant"><select
                          name="IWant"
                          class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                          aria-required="true" aria-invalid="false">
                          <option value="A Quote">A Quote</option>
                          <option value="A Demo">A Demo</option>
                          <option value="Tech Support">Tech Support</option>
                          <option value="Other">Other</option>
                        </select></span>
                    </p>
                    <p> Click below to write a message...(required):<br />
                      <span class="wpcf7-form-control-wrap" data-name="sales"><input
                          type="text" name="sales" value="" size="40"
                          class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true" aria-invalid="false" /></span>
                    </p>
                    <p><input type="submit" value="Send"
                        class="wpcf7-form-control has-spinner wpcf7-submit" /></p>
                    <div class="wpcf7-response-output" aria-hidden="true"></div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
<!-- Render builder content with all required props -->
<!-- Add the announcement-bar model here -->
<!-- <RenderContent
  model="contact-form"
  {content}
  apiKey={BUILDER_PUBLIC_API_KEY}
/> -->
