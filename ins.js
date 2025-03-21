(function () {
  "use strict";

  Lampa.Platform.tv();
  (function () {
    "use strict";
    function _0x4ef394() {
      var _0x56ad05;
      var _0x488306;
      var _0xfbd1a4 = new Lampa.Reguest();
      var _0x5c74fd = {};
      this.create = function () {
        _0x56ad05 = $("<div class=\"new-interface-info\">\n            <div class=\"new-interface-info__body\">\n                <div class=\"new-interface-info__head\"></div>\n                <div class=\"new-interface-info__title\"></div>\n                <div class=\"new-interface-info__details\"></div>\n                <div class=\"new-interface-info__description\"></div>\n            </div>\n        </div>");
      };
      this.update = function (_0x263f86) {
        _0x56ad05.find(".new-interface-info__head,.new-interface-info__details").text("---");
        _0x56ad05.find(".new-interface-info__title").text(_0x263f86.title);
        if (Lampa.Storage.get("logo_card_style") !== false) {
          var _0x4abf86 = _0x263f86.name ? "tv" : "movie";
          var _0x4b5a88 = "http://api.themoviedb.org/3/" + _0x4abf86 + "/" + _0x263f86.id + "/images?api_key=" + "4ef0d7355d9ffb5151e987764708ce96" + "&language=" + Lampa.Storage.get("language");
          $.get(_0x4b5a88, function (_0xb8bfe) {
            if (_0xb8bfe.logos && _0xb8bfe.logos[0]) {
              var _0x469860 = _0xb8bfe.logos[0].file_path;
              if (_0x469860 !== "") {
                if (Lampa.Storage.get("desc") !== false) {
                  _0x56ad05.find(".new-interface-info__title").html("<img style=\"margin-top: 0.3em; margin-bottom: 0.1em; max-height: 1.8em;\" src=\"http://image.tmdb.org/t/p/w500" + _0x469860.replace(".svg", ".png") + "\" />");
                } else {
                  _0x56ad05.find(".new-interface-info__title").html("<img style=\"margin-top: 0.3em; margin-bottom: 0.1em; max-height: 2.8em;\" src=\"http://image.tmdb.org/t/p/w500" + _0x469860.replace(".svg", ".png") + "\" />");
                }
              }
            }
          });
        }
        if (Lampa.Storage.get("desc") !== false) {
          _0x56ad05.find(".new-interface-info__description").text(_0x263f86.overview || Lampa.Lang.translate("full_notext"));
        }
        Lampa.Background.change(Lampa.Api.img(_0x263f86.backdrop_path, "w200"));
        this.load(_0x263f86);
      };
      this.draw = function (_0x48419c) {
        var _0x943b3d = ((_0x48419c.release_date || _0x48419c.first_air_date || "0000") + "").slice(0, 4);
        var _0x2dea76 = parseFloat((_0x48419c.vote_average || 0) + "").toFixed(1);
        var _0x5b69c9 = [];
        var _0xa0e993 = [];
        var _0x72a191 = Lampa.Api.sources.tmdb.parseCountries(_0x48419c);
        var _0x14984d = Lampa.Api.sources.tmdb.parsePG(_0x48419c);
        if (_0x943b3d !== "0000") {
          _0x5b69c9.push("<span>" + _0x943b3d + "</span>");
        }
        if (_0x72a191.length > 0) {
          _0x5b69c9.push(_0x72a191.join(", "));
        }
        if (Lampa.Storage.get("rat") !== false) {
          if (_0x2dea76 > 0) {
            _0xa0e993.push("<div class=\"full-start__rate\"><div>" + _0x2dea76 + "</div><div>TMDB</div></div>");
          }
        }
        if (Lampa.Storage.get("ganr") !== false) {
          if (_0x48419c.genres && _0x48419c.genres.length > 0) {
            _0xa0e993.push(_0x48419c.genres.map(function (_0x3f3d93) {
              return Lampa.Utils.capitalizeFirstLetter(_0x3f3d93.name);
            }).join(" | "));
          }
        }
        if (Lampa.Storage.get("vremya") !== false) {
          if (_0x48419c.runtime) {
            _0xa0e993.push(Lampa.Utils.secondsToTime(_0x48419c.runtime * 60, true));
          }
        }
        if (Lampa.Storage.get("seas") !== false) {
          if (_0x48419c.number_of_seasons) {
            _0xa0e993.push("<span class=\"full-start__pg\" style=\"font-size: 0.9em;\">Сезонов " + _0x48419c.number_of_seasons + "</span>");
          }
        }
        if (Lampa.Storage.get("eps") !== false) {
          if (_0x48419c.number_of_episodes) {
            _0xa0e993.push("<span class=\"full-start__pg\" style=\"font-size: 0.9em;\">Эпизодов " + _0x48419c.number_of_episodes + "</span>");
          }
        }
        if (Lampa.Storage.get("year_ogr") !== false) {
          if (_0x14984d) {
            _0xa0e993.push("<span class=\"full-start__pg\" style=\"font-size: 0.9em;\">" + _0x14984d + "</span>");
          }
        }
        if (Lampa.Storage.get("status") !== false) {
          var _0x5dbe9e = "";
          if (_0x48419c.status) {
            switch (_0x48419c.status.toLowerCase()) {
              case "released":
                _0x5dbe9e = "Выпущенный";
                break;
              case "ended":
                _0x5dbe9e = "Закончен";
                break;
              case "returning series":
                _0x5dbe9e = "Онгоинг";
                break;
              case "canceled":
                _0x5dbe9e = "Отменено";
                break;
              case "post production":
                _0x5dbe9e = "Скоро";
                break;
              case "planned":
                _0x5dbe9e = "Запланировано";
                break;
              case "in production":
                _0x5dbe9e = "В производстве";
                break;
              default:
                _0x5dbe9e = _0x48419c.status;
                break;
            }
          }
          if (_0x5dbe9e) {
            _0xa0e993.push("<span class=\"full-start__status\" style=\"font-size: 0.9em;\">" + _0x5dbe9e + "</span>");
          }
        }
        _0x56ad05.find(".new-interface-info__head").empty().append(_0x5b69c9.join(", "));
        _0x56ad05.find(".new-interface-info__details").html(_0xa0e993.join("<span class=\"new-interface-info__split\">&#9679;</span>"));
      };
      this.load = function (_0x16a251) {
        var _0x9bd7aa = this;
        clearTimeout(_0x488306);
        var _0x59bfff = Lampa.TMDB.api((_0x16a251.name ? "tv" : "movie") + "/" + _0x16a251.id + "?api_key=" + Lampa.TMDB.key() + "&append_to_response=content_ratings,release_dates&language=" + Lampa.Storage.get("language"));
        if (_0x5c74fd[_0x59bfff]) {
          return this.draw(_0x5c74fd[_0x59bfff]);
        }
        _0x488306 = setTimeout(function () {
          _0xfbd1a4.clear();
          _0xfbd1a4.timeout(5e3);
          _0xfbd1a4.silent(_0x59bfff, function (_0x4bf528) {
            _0x5c74fd[_0x59bfff] = _0x4bf528;
            _0x9bd7aa.draw(_0x4bf528);
          });
        }, 300);
      };
      this.render = function () {
        return _0x56ad05;
      };
      this.empty = function () {};
      this.destroy = function () {
        _0x56ad05.remove();
        _0x5c74fd = {};
        _0x56ad05 = null;
      };
    }
    function _0x1bc649(_0x3b6024) {
      var _0x43a398 = new Lampa.Reguest();
      var _0x33a26d = new Lampa.Scroll({
        mask: true,
        over: true,
        scroll_by_item: true
      });
      var _0x2f563c = [];
      var _0x43a557 = $("<div class=\"new-interface\"><img class=\"full-start__background\"></div>");
      var _0x5e8c0b = 0;
      var _0x39179f = Lampa.Manifest.app_digital >= 166;
      var _0x2b0420;
      var _0x2fb58d;
      var _0x3537f9 = Lampa.Storage.field("card_views_type") == "view" || Lampa.Storage.field("navigation_type") == "mouse";
      var _0x3d0910 = _0x43a557.find(".full-start__background");
      var _0x1687fa = "";
      var _0x36233d;
      this.create = function () {};
      this.empty = function () {
        var _0x2e03e1;
        if (_0x3b6024.source == "tmdb") {
          _0x2e03e1 = $("<div class=\"empty__footer\"><div class=\"simple-button selector\">" + Lampa.Lang.translate("change_source_on_cub") + "</div></div>");
          _0x2e03e1.find(".selector").on("hover:enter", function () {
            Lampa.Storage.set("source", "cub");
            Lampa.Activity.replace({
              source: "cub"
            });
          });
        }
        var _0x4fc052 = new Lampa.Empty();
        _0x43a557.append(_0x4fc052.render(_0x2e03e1));
        this.start = _0x4fc052.start;
        this.activity.loader(false);
        this.activity.toggle();
      };
      this.loadNext = function () {
        var _0x5bf3e8 = this;
        if (this.next && !this.next_wait && _0x2f563c.length) {
          this.next_wait = true;
          this.next(function (_0xc90774) {
            _0x5bf3e8.next_wait = false;
            _0xc90774.forEach(_0x5bf3e8.append.bind(_0x5bf3e8));
            Lampa.Layer.visible(_0x2f563c[_0x5e8c0b + 1].render(true));
          }, function () {
            _0x5bf3e8.next_wait = false;
          });
        }
      };
      this.push = function () {};
      this.build = function (_0xfae84e) {
        var _0x2d398a = this;
        _0x2fb58d = _0xfae84e;
        _0x2b0420 = new _0x4ef394(_0x3b6024);
        _0x2b0420.create();
        _0x33a26d.minus(_0x2b0420.render());
        _0xfae84e.slice(0, _0x3537f9 ? _0xfae84e.length : 2).forEach(this.append.bind(this));
        _0x43a557.append(_0x2b0420.render());
        _0x43a557.append(_0x33a26d.render());
        if (_0x39179f) {
          Lampa.Layer.update(_0x43a557);
          Lampa.Layer.visible(_0x33a26d.render(true));
          _0x33a26d.onEnd = this.loadNext.bind(this);
          _0x33a26d.onWheel = function (_0x541607) {
            if (!Lampa.Controller.own(_0x2d398a)) {
              _0x2d398a.start();
            }
            if (_0x541607 > 0) {
              _0x2d398a.down();
            } else {
              if (_0x5e8c0b > 0) {
                _0x2d398a.up();
              }
            }
          };
        }
        this.activity.loader(false);
        this.activity.toggle();
      };
      this.background = function (_0x58669c) {
        var _0x2c69d1 = Lampa.Api.img(_0x58669c.backdrop_path, "w1280");
        clearTimeout(_0x36233d);
        if (_0x2c69d1 == _0x1687fa) {
          return;
        }
        _0x36233d = setTimeout(function () {
          _0x3d0910.removeClass("loaded");
          _0x3d0910[0].onload = function () {
            _0x3d0910.addClass("loaded");
          };
          _0x3d0910[0].onerror = function () {
            _0x3d0910.removeClass("loaded");
          };
          _0x1687fa = _0x2c69d1;
          setTimeout(function () {
            _0x3d0910[0].src = _0x1687fa;
          }, 50);
        }, 100);
      };
      this.append = function (_0xb49665) {
        var _0x5652f0 = this;
        if (_0xb49665.ready) {
          return;
        }
        _0xb49665.ready = true;
        var _0x56dd23 = new Lampa.InteractionLine(_0xb49665, {
          url: _0xb49665.url,
          card_small: true,
          cardClass: _0xb49665.cardClass,
          genres: _0x3b6024.genres,
          object: _0x3b6024,
          card_wide: Lampa.Storage.field("wide_post"),
          nomore: _0xb49665.nomore
        });
        _0x56dd23.create();
        _0x56dd23.onDown = this.down.bind(this);
        _0x56dd23.onUp = this.up.bind(this);
        _0x56dd23.onBack = this.back.bind(this);
        _0x56dd23.onToggle = function () {
          _0x5e8c0b = _0x2f563c.indexOf(_0x56dd23);
        };
        if (this.onMore) {
          _0x56dd23.onMore = this.onMore.bind(this);
        }
        _0x56dd23.onFocus = function (_0x5b972b) {
          _0x2b0420.update(_0x5b972b);
          _0x5652f0.background(_0x5b972b);
        };
        _0x56dd23.onHover = function (_0x189bbd) {
          _0x2b0420.update(_0x189bbd);
          _0x5652f0.background(_0x189bbd);
        };
        _0x56dd23.onFocusMore = _0x2b0420.empty.bind(_0x2b0420);
        _0x33a26d.append(_0x56dd23.render());
        _0x2f563c.push(_0x56dd23);
      };
      this.back = function () {
        Lampa.Activity.backward();
      };
      this.down = function () {
        _0x5e8c0b++;
        _0x5e8c0b = Math.min(_0x5e8c0b, _0x2f563c.length - 1);
        if (!_0x3537f9) {
          _0x2fb58d.slice(0, _0x5e8c0b + 2).forEach(this.append.bind(this));
        }
        _0x2f563c[_0x5e8c0b].toggle();
        _0x33a26d.update(_0x2f563c[_0x5e8c0b].render());
      };
      this.up = function () {
        _0x5e8c0b--;
        if (_0x5e8c0b < 0) {
          _0x5e8c0b = 0;
          Lampa.Controller.toggle("head");
        } else {
          _0x2f563c[_0x5e8c0b].toggle();
          _0x33a26d.update(_0x2f563c[_0x5e8c0b].render());
        }
      };
      this.start = function () {
        var _0x1205e3 = this;
        Lampa.Controller.add("content", {
          link: this,
          toggle: function _0x2b3732() {
            if (_0x1205e3.activity.canRefresh()) {
              return false;
            }
            if (_0x2f563c.length) {
              _0x2f563c[_0x5e8c0b].toggle();
            }
          },
          update: function _0x2d38da() {},
          left: function _0x4287d7() {
            if (Navigator.canmove("left")) {
              Navigator.move("left");
            } else {
              Lampa.Controller.toggle("menu");
            }
          },
          right: function _0x575609() {
            Navigator.move("right");
          },
          up: function _0x48c84a() {
            if (Navigator.canmove("up")) {
              Navigator.move("up");
            } else {
              Lampa.Controller.toggle("head");
            }
          },
          down: function _0x358843() {
            if (Navigator.canmove("down")) {
              Navigator.move("down");
            }
          },
          back: this.back
        });
        Lampa.Controller.toggle("content");
      };
      this.refresh = function () {
        this.activity.loader(true);
        this.activity.need_refresh = true;
      };
      this.pause = function () {};
      this.stop = function () {};
      this.render = function () {
        return _0x43a557;
      };
      this.destroy = function () {
        _0x43a398.clear();
        Lampa.Arrays.destroy(_0x2f563c);
        _0x33a26d.destroy();
        if (_0x2b0420) {
          _0x2b0420.destroy();
        }
        _0x43a557.remove();
        _0x2f563c = null;
        _0x43a398 = null;
        _0x2fb58d = null;
      };
    }
    function _0x27d261() {
      if (Lampa.Manifest.origin !== "bylampa") {
        Lampa.Noty.show("Ошибка доступа");
        return;
      }
      window.plugin_interface_ready = true;
      var _0x273e18 = Lampa.InteractionMain;
      Lampa.InteractionMain = function (_0x3b20b4) {
        var _0xdbf999 = _0x1bc649;
        if (!(_0x3b20b4.source == "tmdb" || _0x3b20b4.source == "cub")) {
          _0xdbf999 = _0x273e18;
        }
        if (window.innerWidth < 767) {
          _0xdbf999 = _0x273e18;
        }
        if (Lampa.Manifest.app_digital < 153) {
          _0xdbf999 = _0x273e18;
        }
        if (Lampa.Platform.screen("mobile")) {
          _0xdbf999 = _0x273e18;
        }
        return new _0xdbf999(_0x3b20b4);
      };
      if (Lampa.Storage.get("wide_post") == true) {
        Lampa.Template.add("new_interface_style", "\n        <style>\n        .new-interface .card--small.card--wide {\n            width: 18.3em;\n        }\n        \n        .new-interface-info {\n            position: relative;\n            padding: 1.5em;\n            height: 26em;\n        }\n        \n        .new-interface-info__body {\n            width: 80%;\n            padding-top: 1.1em;\n        }\n        \n        .new-interface-info__head {\n            color: rgba(255, 255, 255, 0.6);\n            margin-bottom: 1em;\n            font-size: 1.3em;\n            min-height: 1em;\n        }\n        \n        .new-interface-info__head span {\n            color: #fff;\n        }\n        \n        .new-interface-info__title {\n            font-size: 4em;\n            font-weight: 600;\n            margin-bottom: 0.3em;\n            overflow: hidden;\n            -o-text-overflow: \".\";\n            text-overflow: \".\";\n            display: -webkit-box;\n            -webkit-line-clamp: 1;\n            line-clamp: 1;\n            -webkit-box-orient: vertical;\n            margin-left: -0.03em;\n            line-height: 1.3;\n        }\n        \n        .new-interface-info__details {\n            margin-bottom: 1.6em;\n            display: -webkit-box;\n            display: -webkit-flex;\n            display: -moz-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n            -webkit-align-items: center;\n            -moz-box-align: center;\n            -ms-flex-align: center;\n            align-items: center;\n            -webkit-flex-wrap: wrap;\n            -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n            min-height: 1.9em;\n            font-size: 1.3em;\n        }\n        \n        .new-interface-info__split {\n            margin: 0 1em;\n            font-size: 0.7em;\n        }\n        \n        .new-interface-info__description {\n            font-size: 1.4em;\n            font-weight: 310;\n            line-height: 1.3;\n            overflow: hidden;\n            -o-text-overflow: \".\";\n            text-overflow: \".\";\n            display: -webkit-box;\n            -webkit-line-clamp: 3;\n            line-clamp: 3;\n            -webkit-box-orient: vertical;\n            width: 65%;\n        }\n        \n        .new-interface .card-more__box {\n            padding-bottom: 95%;\n        }\n        \n        .new-interface .full-start__background {\n            height: 108%;\n            top: -5em;\n        }\n        \n        .new-interface .full-start__rate {\n            font-size: 1.3em;\n            margin-right: 0;\n        }\n        \n        .new-interface .card__promo {\n            display: none;\n        }\n        \n        .new-interface .card.card--wide+.card-more .card-more__box {\n            padding-bottom: 95%;\n        }\n        \n        .new-interface .card.card--wide .card-watched {\n            display: none !important;\n        }\n        \n        body.light--version .new-interface-info__body {\n            width: 69%;\n            padding-top: 1.5em;\n        }\n        \n        body.light--version .new-interface-info {\n            height: 25.3em;\n        }\n\n        body.advanced--animation:not(.no--animation) .new-interface .card--small.card--wide.focus .card__view{\n            animation: animation-card-focus 0.2s\n        }\n        body.advanced--animation:not(.no--animation) .new-interface .card--small.card--wide.animate-trigger-enter .card__view{\n            animation: animation-trigger-enter 0.2s forwards\n        }\n        </style>\n    ");
        $("body").append(Lampa.Template.get("new_interface_style", {}, true));
      } else {
        Lampa.Template.add("new_interface_style", "\n        <style>\n        .new-interface .card--small.card--wide {\n            width: 18.3em;\n        }\n        \n        .new-interface-info {\n            position: relative;\n            padding: 1.5em;\n            height: 20.4em;\n        }\n        \n        .new-interface-info__body {\n            width: 80%;\n            padding-top: 0.2em;\n        }\n        \n        .new-interface-info__head {\n            color: rgba(255, 255, 255, 0.6);\n            margin-bottom: 0.3em;\n            font-size: 1.3em;\n            min-height: 1em;\n        }\n        \n        .new-interface-info__head span {\n            color: #fff;\n        }\n        \n        .new-interface-info__title {\n            font-size: 4em;\n            font-weight: 600;\n            margin-bottom: 0.2em;\n            overflow: hidden;\n            -o-text-overflow: \".\";\n            text-overflow: \".\";\n            display: -webkit-box;\n            -webkit-line-clamp: 1;\n            line-clamp: 1;\n            -webkit-box-orient: vertical;\n            margin-left: -0.03em;\n            line-height: 1.3;\n        }\n        \n        .new-interface-info__details {\n            margin-bottom: 1.6em;\n            display: -webkit-box;\n            display: -webkit-flex;\n            display: -moz-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n            -webkit-align-items: center;\n            -moz-box-align: center;\n            -ms-flex-align: center;\n            align-items: center;\n            -webkit-flex-wrap: wrap;\n            -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n            min-height: 1.9em;\n            font-size: 1.3em;\n        }\n        \n        .new-interface-info__split {\n            margin: 0 1em;\n            font-size: 0.7em;\n        }\n        \n        .new-interface-info__description {\n            font-size: 1.4em;\n            font-weight: 310;\n            line-height: 1.3;\n            overflow: hidden;\n            -o-text-overflow: \".\";\n            text-overflow: \".\";\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            line-clamp: 2;\n            -webkit-box-orient: vertical;\n            width: 70%;\n        }\n        \n        .new-interface .card-more__box {\n            padding-bottom: 150%;\n        }\n        \n        .new-interface .full-start__background {\n            height: 108%;\n            top: -5em;\n        }\n        \n        .new-interface .full-start__rate {\n            font-size: 1.3em;\n            margin-right: 0;\n        }\n        \n        .new-interface .card__promo {\n            display: none;\n        }\n        \n        .new-interface .card.card--wide+.card-more .card-more__box {\n            padding-bottom: 95%;\n        }\n        \n        .new-interface .card.card--wide .card-watched {\n            display: none !important;\n        }\n        \n        body.light--version .new-interface-info__body {\n            width: 69%;\n            padding-top: 1.5em;\n        }\n        \n        body.light--version .new-interface-info {\n            height: 25.3em;\n        }\n\n        body.advanced--animation:not(.no--animation) .new-interface .card--small.card--wide.focus .card__view{\n            animation: animation-card-focus 0.2s\n        }\n        body.advanced--animation:not(.no--animation) .new-interface .card--small.card--wide.animate-trigger-enter .card__view{\n            animation: animation-trigger-enter 0.2s forwards\n        }\n        </style>\n    ");
        $("body").append(Lampa.Template.get("new_interface_style", {}, true));
      }
      Lampa.Settings.listener.follow("open", function (_0x158d33) {
        if (_0x158d33.name == "main") {
          if (Lampa.Settings.main().render().find("[data-component=\"style_interface\"]").length == 0) {
            Lampa.SettingsApi.addComponent({
              component: "style_interface",
              name: "Стильный интерфейс",
              icon: "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:1.8em;height:1.3em;padding-right:.5em\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386v.844l1.001-.876a2.3 2.3 0 0 1 3.141.104l4.29 4.29a2 2 0 0 0 2.564.222l.298-.21a3 3 0 0 1 3.732.225l2.83 2.547c.286-.598.455-1.384.545-2.493c.098-1.205.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176\" clip-rule=\"evenodd\"/></svg></div><div style=\"font-size:1em\">Стильный интерфейс</div></div>"
            });
          }
          Lampa.Settings.main().update();
          Lampa.Settings.main().render().find("[data-component=\"style_interface\"]").addClass("hide");
        }
      });
      Lampa.SettingsApi.addParam({
        component: "interface",
        param: {
          name: "style_interface",
          type: "static",
          default: true
        },
        field: {
          name: "Стильный интерфейс",
          description: "Настройки элементов"
        },
        onRender: function (_0x4e2601) {
          setTimeout(function () {
            $(".settings-param > div:contains(\"Стильный интерфейс\")").parent().insertAfter($("div[data-name=\"interface_size\"]"));
          }, 50);
          _0x4e2601.on("hover:enter", function () {
            Lampa.Settings.create("style_interface");
            Lampa.Controller.enabled().controller.back = function () {
              Lampa.Settings.create("interface");
            };
          });
        }
      });
      Lampa.SettingsApi.addParam({
        component: "style_interface",
        param: {
          name: "wide_post",
          type: "trigger",
          default: true
        },
        field: {
          name: "Широкие постеры"
        }
      });
      Lampa.SettingsApi.addParam({
        component: "style_interface",
        param: {
          name: "logo_card_style",
          type: "trigger",
          default: true
        },
        field: {
          name: "Логотип вместо названия"
        },
        onRender: function (_0x16b33e) {}
      });
      Lampa.SettingsApi.addParam({
        component: "style_interface",
        param: {
          name: "desc",
          type: "trigger",
          default: true
        },
        field: {
          name: "Показывать описание"
        }
      });
      Lampa.SettingsApi.addParam({
        component: "style_interface",
        param: {
          name: "status",
          type: "trigger",
          default: false
        },
        field: {
          name: "Показывать статус фильма/сериала"
        }
      });
      Lampa.SettingsApi.addParam({
        component: "style_interface",
        param: {
          name: "seas",
          type: "trigger",
          default: false
        },
        field: {
          name: "Показывать количество сезонов"
        }
      });
      Lampa.SettingsApi.addParam({
        component: "style_interface",
        param: {
          name: "eps",
          type: "trigger",
          default: false
        },
        field: {
          name: "Показывать количество эпизодов"
        }
      });
      Lampa.SettingsApi.addParam({
        component: "style_interface",
        param: {
          name: "year_ogr",
          type: "trigger",
          default: true
        },
        field: {
          name: "Показывать возрастное ограничение"
        }
      });
      Lampa.SettingsApi.addParam({
        component: "style_interface",
        param: {
          name: "vremya",
          type: "trigger",
          default: true
        },
        field: {
          name: "Показывать время фильма"
        }
      });
      Lampa.SettingsApi.addParam({
        component: "style_interface",
        param: {
          name: "ganr",
          type: "trigger",
          default: true
        },
        field: {
          name: "Показывать жанр фильма"
        }
      });
      Lampa.SettingsApi.addParam({
        component: "style_interface",
        param: {
          name: "rat",
          type: "trigger",
          default: true
        },
        field: {
          name: "Показывать рейтинг фильма"
        }
      });
    }
    if (!window.plugin_interface_ready) {
      _0x27d261();
    }
  })();
})();
