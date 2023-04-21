<script type="text/javascript">
    jQuery(function () {
      var hightlighted = null;
      usahtml5map_map_0 = new FlaShopUSAMap(usahtml5map_map_cfg_0);
      usahtml5map_map_0.draw("usa-html5-map-map-container_0");
      usahtml5map_map_0.on("mousein", function (ev, sid, map) {
        if (hightlighted && sid != hightlighted) {
          map.stateHighlightOut(hightlighted);
          hightlighted = null;
        }
      });
      var html5map_onclick = function (ev, sid, map) {
        var cfg = usahtml5map_map_cfg_0;
        var link = map.fetchStateAttr(sid, "link");
        var is_group = map.fetchStateAttr(sid, "group");
        var popup_id = map.fetchStateAttr(sid, "popup-id");
        var is_group_info = false;
        if (typeof cfg.map_data[sid] !== "undefined")
          jQuery("#usa-html5-map-selector_0").val(sid);
        else jQuery("#usa-html5-map-selector_0").val("");
        if (is_group == undefined) {
          if (sid.substr(0, 1) == "p") {
            popup_id = map.fetchPointAttr(sid, "popup_id");
            link = map.fetchPointAttr(sid, "link");
          }
        } else if (
          typeof cfg.groups[is_group]["ignore_link"] == "undefined" ||
          !cfg.groups[is_group].ignore_link
        ) {
          link = cfg.groups[is_group].link;
          popup_id = cfg.groups[is_group]["popup_id"];
          is_group_info = true;
        }
        if (link == "#popup") {
          if (typeof SG_POPUP_DATA == "object") {
            if (popup_id in SG_POPUP_DATA) {
              SGPopup.prototype.showPopup(popup_id, false);
            } else {
              jQuery
                .ajax({
                  type: "POST",
                  url: "https://acceleronlearning.com/index.php?map_id=0&usahtml5map_get_popup",
                  data: { popup_id: popup_id },
                })
                .done(function (data) {
                  jQuery("body").append(data);
                  SGPopup.prototype.showPopup(popup_id, false);
                });
            }
          } else if (typeof SGPBPopup == "function") {
            var popup = SGPBPopup.createPopupObjById(popup_id);
            popup.prepareOpen();
            popup.open();
          }
          return false;
        }
        if (link == "#info") {
          var id = is_group_info
            ? is_group
            : sid.substr(0, 1) == "p"
            ? sid
            : map.fetchStateAttr(sid, "id");
          jQuery("#usa-html5-map-state-info_0").html("Loading...");
          jQuery.ajax({
            type: "POST",
            url:
              (is_group_info
                ? "https://acceleronlearning.com/index.php?map_id=0&usahtml5map_get_group_info="
                : "https://acceleronlearning.com/index.php?map_id=0&usahtml5map_get_state_info=") +
              id,
            success: function (data, textStatus, jqXHR) {
              jQuery("#usa-html5-map-state-info_0").html(data);
            },
            dataType: "text",
          });
          return false;
        }
        if (ev === null && link != "") {
          if (!jQuery(".html5dummilink").length) {
            jQuery("body").append(
              '<a href="#" class="html5dummilink" style="display:none"></a>'
            );
          }
          jQuery(".html5dummilink")
            .attr("href", link)
            .attr(
              "target",
              map.fetchStateAttr(sid, "isNewWindow") ? "_blank" : "_self"
            )[0]
            .click();
        }
      };
      usahtml5map_map_0.on("click", html5map_onclick);
    });
  </script>

<div class="usaHtml5Mapbottom htmlMapResponsive" style="max-width: 980px">
    <div
      id="usa-html5-map-map-container_0"
      class="usaHtml5MapContainer"
      data-map-variable="usahtml5map_map_0"
    ></div>
    <div style="clear: both; height: 20px"></div>
    
    <div id="usa-html5-map-state-info_0" class="usaHtml5MapStateInfo"></div>
  </div>
  <div style="clear: both"></div>
  <style>
    #usa-html5-map-map-container_0 {
    }
    #usa-html5-map-map-container_0 .fm-tooltip-name {
      color: #000000;
      font-size: 20px;
    }
    #usa-html5-map-map-container_0 .fm-tooltip-comment {
    }
    #usa-html5-map-map-container_0 .fm-tooltip-comment p {
    }
    @media only screen and (max-width: 480px) {
      #usa-html5-map-map-container_0 {
        float: none;
        width: 100%;
      }
    }
  </style>
