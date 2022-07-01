class Player {
    constructor() {
        this.state_play = false;
        this.is_event = false;
        this.video = document.querySelector('video');
        this.audio = document.querySelector('audio');

        this.video_id = document.querySelector('.html-player[data-video-id]').dataset.videoId;
        this.is_autoplay = false;
        this.is_autoskip = false;

        this.video.volume = 0;
        this.current_time = 0;

        this.elements = {
            container_player: document.querySelector('div.container-player'),

            html_player: document.querySelector('div.html-player'),
            event_line: document.querySelector('div.event-line'),
            user_bar: document.querySelector('div.name-bar'),

            play_button: document.querySelector('button[data-event="play"]'),
            play_and_pause: document.querySelectorAll('button[data-event="play"]'),
            playlist_show_hide: document.querySelector('[data-event="playlist-show-hide"]'),

            button_skip_screen: document.querySelector('button[data-event="skip-screen"]'),

            line_video: document.querySelector('div[data-event="line_video"]'),
            cursor_progress: document.querySelector('div[data-event="rewind"]'),

            vol_video: document.querySelector('div[data-event="vol-video"]'),
            vol_cursor: document.querySelector('div[data-event="vol-cursor"]'),

            current_time: document.querySelector('span[data-event="current_time"]'),
            duration_time: document.querySelector('span[data-event="duration_time"]'),

            button_fullscreen: document.querySelector('button[data-event="fullscreen"]'),

            playlist: document.querySelector('div.playlist'),

            dropdowns: document.querySelectorAll('.dropdown'),

            pic_in_pic: document.querySelector('li[data-event="pic-in-pic"]'),

            continue_screen: document.querySelectorAll('a[data-event="continue-screen"]'),

            change_voices: document.querySelectorAll('li[data-event="change-voice-acting"]'),

            change_series: document.querySelectorAll('li[data-event="change-series"]'),

            button_autoplay: document.querySelector('li[data-event="autoplay-series"]'),
            button_autoskip: document.querySelector('li[data-event="autoskip-series"]'),
        }

        this.setters = {
            name: document.querySelector('[data-set="name"]'),
            voice: document.querySelector('[data-set="voice"]')
        }
    }

    /** Простые методы плеера **/
    setVideoTime(time) {
        this.video.currentTime = time;
    }

    setAduioTime(time) {
        this.audio.currentTime = time;
    }

    formatVideoTime(timestamp) {
        let hours = Math.floor(timestamp / 60 / 60);
        let minutes = Math.floor(timestamp / 60) - (hours * 60);
        let seconds = timestamp % 60;

        let hhmmss = (num) => {
            return num <= 9 ? `0${num}` : num;
        }

        return `${hhmmss(parseInt(hours))}:${hhmmss(parseInt(minutes))}:${hhmmss(parseInt(seconds))}`;
    }

    setVolume(volume) {
        this.audio.volume = volume;
    }


    /** Обработчики плеера **/
    showHideIntefrace() {
        let move_timer;

        this.elements.html_player.addEventListener('mouseout', () => {
            this.elements.event_line.classList.remove('show');
            this.elements.user_bar.classList.remove('show');
        });

        this.elements.html_player.addEventListener('mouseover', () => {
            this.elements.event_line.classList.add('show');
            this.elements.user_bar.classList.add('show');
        });

        this.elements.html_player.addEventListener('mousemove', () => {
            this.elements.event_line.classList.add('show');
            this.elements.user_bar.classList.add('show');

            if (!this.is_event) {
                if (move_timer) {
                    clearTimeout(move_timer);
                }

                move_timer = setTimeout(() => {
                    this.elements.event_line.classList.remove('show');
                    this.elements.user_bar.classList.remove('show');
                }, 3000);
            }
        });
    }

    playAndPause() {
        this.elements.play_and_pause.forEach((item, i) => {
            item.addEventListener('click', () => {
                this.elements.play_and_pause.forEach((item_all) => {

                    if (item_all.querySelector('i').classList.value !== 'fal fa-play') {
                        item_all.querySelector('i').classList.value = 'fal fa-play';

                        this.current_time = this.video.currentTime;

                        this.video.pause();
                        this.audio.pause();
                    } else {
                        item_all.querySelector('i').classList.value = 'fal fa-pause';
                        this.video.play();
                        this.audio.play();
                    }
                });
            });
        });
    }

    revindVideo() {
        let width_percent;

        setInterval(() => {
            width_percent = this.elements.line_video.offsetWidth;
        }, 100);

        let click_video_line = false;
        let cursor_percent;

        this.elements.line_video.addEventListener('mousedown', (event) => {
            this.is_event = true;

            cursor_percent = event.offsetX / width_percent * 100;

            if (cursor_percent > 100) {
                cursor_percent = 100;
            }

            this.elements.cursor_progress.style.width = `${cursor_percent}%`;
        });

        this.elements.html_player.addEventListener('mouseup', (event) => {
            if (this.is_event) {
                let video_line_page_x = this.elements.line_video.getBoundingClientRect();

                let target_element = event.target || event.srcElement;
                let data_element = target_element.dataset;

                if (data_element.event) {
                    cursor_percent = event.offsetX / width_percent * 100;
                } else {
                    cursor_percent = (event.offsetX - video_line_page_x.x + 4) / width_percent * 100;
                }

                // n / 100 * p
                this.current_time = this.video.duration / 100 * cursor_percent;

                this.setVideoTime(this.current_time);
                this.setAduioTime(this.current_time);


                this.is_event = false;
            }
        });

        this.elements.html_player.addEventListener('mousemove', (event) => {

            let target_element = event.target || event.srcElement;
            let data_element = target_element.dataset;

            if (this.is_event) {
                console.log(1);

                let video_line_page_x = this.elements.line_video.getBoundingClientRect();

                let c = 0;

                this.is_event = true;

                c += 1;

                if (data_element.event) {
                    cursor_percent = event.offsetX / width_percent * 100;
                } else {
                    cursor_percent = (event.offsetX - video_line_page_x.x) / width_percent * 100;
                }

                console.log(event.offsetX, cursor_percent);

                // cursor_percent = event.offsetX / width_percent * 100;


                if (cursor_percent >= 100) {
                    cursor_percent = 100;
                }

                this.elements.cursor_progress.style.width = `${cursor_percent}%`;
            }
        });


        window.addEventListener('keydown', (event) => {

            if (event.key == 'ArrowRight') {
                this.current_time += 2;

                this.setVideoTime(this.current_time);
                this.setAduioTime(this.current_time);

                this.elements.cursor_progress.style.width = (100 * this.current_time) / this.audio.duration;
            }

            if (event.key == 'ArrowLeft') {
                this.current_time -= 2;

                this.setVideoTime(this.current_time);
                this.setAduioTime(this.current_time);

                this.elements.cursor_progress.style.width = (100 * this.current_time) / this.audio.duration;
            }

        });
    }

    updateVideoLine() {
        if (!this.is_event && this.elements.play_button.querySelector('i').className === 'fal fa-pause') {

            this.current_time = this.video.currentTime;

            let duration_video = this.video.duration;
            let percent_time = this.current_time / duration_video * 100;
            let is_change = false;

            this.elements.cursor_progress.style.width = `${percent_time}%`;

            this.elements.current_time.textContent = this.formatVideoTime(this.current_time);
            this.elements.duration_time.textContent = this.formatVideoTime(duration_video);

            if (duration_video <= this.video.currentTime) {
                this.elements.change_series.forEach((item, i) => {
                    if (item.dataset.videoId == this.video_id) {
                        if (!is_change) {
                            if (this.elements.change_series[i + 1]) {
                                this.changeSeries(this.elements.change_series[i + 1]);
                                console.log('ID ' + this.elements.change_series[i + 1], i + 1);
                            } else {
                                console.log('Серии закночились');
                            }

                            is_change = true;
                        }

                        return false;
                    }
                });

                setTimeout(() => {
                    is_change = false;
                }, 3000);
            }
        }
    }

    updateVideoVolume() {
        let height_percent = this.elements.vol_video.offsetHeight;
        let click_video_line = false;
        let cursor_percent;
        let is_ent = false;

        this.elements.vol_video.addEventListener('mousedown', (event) => {
            this.is_ent = true;
        });

        this.elements.html_player.addEventListener('mouseup', (event) => {

            if (this.is_ent) {

                height_percent = this.elements.vol_video.offsetHeight;
                cursor_percent = (this.elements.vol_video.offsetHeight - event.offsetY - 5) / height_percent * 100;
                // console.log(height_percent, event.offsetY);
                this.elements.vol_cursor.style.height = `${cursor_percent}%`;

                this.is_ent = false;

                this.setVolume(parseInt(cursor_percent) * 0.01);
            }
        });

        this.elements.vol_cursor.addEventListener('mousemove', (event) => {
            if (this.is_ent) {
                height_percent = this.elements.vol_video.offsetHeight;
                cursor_percent = (this.elements.vol_video.offsetHeight - event.offsetY - 5) / height_percent * 100;
                // console.log(height_percent, event.offsetY);
                this.elements.vol_cursor.style.height = `${cursor_percent}%`;

            }
        });

        this.elements.html_player.addEventListener('mousemove', (event) => {
            if (this.is_ent) {
                height_percent = this.elements.vol_video.offsetHeight;
                cursor_percent = (this.elements.vol_video.offsetHeight - event.offsetY- 5) / height_percent * 100;
                // console.log(height_percent, event.offsetY);
                this.elements.vol_cursor.style.height = `${cursor_percent}%`;

            }
        });

        let elem = this.elements.html_player;

        if (elem.addEventListener) {
          if ('onwheel' in document) {
            // IE9+, FF17+, Ch31+
            elem.addEventListener("wheel", (event) => {
                // wheelDelta не даёт возможность узнать количество пикселей
                var delta = event.deltaY || event.detail || event.wheelDelta;

                event.preventDefault ? event.preventDefault() : (event.returnValue = false);

                try {
                    if (delta > 0 && this.audio.volume > 0) {
                        this.audio.volume -= 0.01;
                    } else {
                        this.audio.volume += 0.01;
                    }
                } catch (e) {

                }

                this.elements.vol_cursor.style.height = `${this.audio.volume * 100}%`;
            });
          } else if ('onmousewheel' in document) {
            // устаревший вариант события
            elem.addEventListener("mousewheel", (event) => {
                // wheelDelta не даёт возможность узнать количество пикселей
                var delta = event.deltaY || event.detail || event.wheelDelta;

                event.preventDefault ? event.preventDefault() : (event.returnValue = false);

                try {
                    if (delta > 0 && this.audio.volume > 0) {
                        this.audio.volume -= 0.01;
                    } else {
                        this.audio.volume += 0.01;
                    }
                } catch (e) {

                }

                this.elements.vol_cursor.style.height = `${this.audio.volume * 100}%`;
            });
          } else {
            // Firefox < 17
            elem.addEventListener("MozMousePixelScroll", (event) => {
                // wheelDelta не даёт возможность узнать количество пикселей
                var delta = event.deltaY || event.detail || event.wheelDelta;

                event.preventDefault ? event.preventDefault() : (event.returnValue = false);

                try {
                    if (delta > 0 && this.audio.volume > 0) {
                        this.audio.volume -= 0.01;
                    } else {
                        this.audio.volume += 0.01;
                    }
                } catch (e) {

                }

                this.elements.vol_cursor.style.height = `${this.audio.volume * 100}%`;
            });
          }
        } else { // IE8-
          elem.attachEvent("onmousewheel", (event) => {
              // wheelDelta не даёт возможность узнать количество пикселей
              var delta = event.deltaY || event.detail || event.wheelDelta;

              event.preventDefault ? event.preventDefault() : (event.returnValue = false);

              try {
                  if (delta > 0 && this.audio.volume > 0) {
                      this.audio.volume -= 0.01;
                  } else {
                      this.audio.volume += 0.01;
                  }
              } catch (e) {

              }

              this.elements.vol_cursor.style.height = `${this.audio.volume * 100}%`;
          });
        }
    }

    playlistChangeVideo() {
        let items = this.elements.playlist.querySelectorAll('div.item');
        let source = this.video.querySelector('source');

        if (items.length > 0) {
            items.forEach((item, i) => {
                item.addEventListener('click', () => {
                    let video_url = item.dataset.videoUrl;
                    let video_type = item.dataset.videoType;
                    let video_autoplay = item.dataset.autoplay;
                    let audio_url = item.dataset.audioUrl;
                    let video_name = item.dataset.name;
                    let video_voice = item.dataset.voice;
                    let video_id = item.dataset.videoId;

                    this.video_id = video_id;

                    this.video.pause();

                    this.elements.play_and_pause.forEach((item_all) => {
                        item_all.querySelector('i').classList.value = 'fal fa-play';
                    });

                    source.setAttribute('src', video_url);
                    source.setAttribute('type', video_type);
                    this.video.load();

                    this.audio.src = audio_url;
                    this.audio.load();

                    // this.setters.name.textContent = video_name;
                    // this.setters.voice.textContent = video_voice;

                    if (video_autoplay == 'on') {
                        this.video.play();
                        this.audio.play();
                        this.elements.play_and_pause.forEach((item_all) => {
                            item_all.querySelector('i').classList.value = 'fal fa-pause';
                        });
                    }
                });
            });
        }
    }

    changeSeries(el_item = null) {
        let items = this.elements.change_series;
        let source = this.video.querySelector('source');

        if (!el_item) {
            if (items.length > 0) {
                items.forEach((item, i) => {
                    item.addEventListener('click', () => {
                        let video_url = item.dataset.videoUrl;
                        let video_type = item.dataset.videoType;
                        let video_autoplay = item.dataset.autoplay;
                        let audio_url = item.dataset.audioUrl;
                        let video_name = item.dataset.name;
                        let video_voice = item.dataset.voice;
                        let video_id = item.dataset.videoId;

                        this.video_id = video_id;


                        this.video.pause();

                        this.elements.play_and_pause.forEach((item_all) => {
                            item_all.querySelector('i').classList.value = 'fal fa-play';
                        });

                        source.setAttribute('src', video_url);
                        source.setAttribute('type', video_type);
                        this.video.load();

                        this.audio.src = audio_url;
                        this.audio.load();

                        // this.setters.name.textContent = video_name;
                        // this.setters.voice.textContent = video_voice;

                        if (video_autoplay == 'on') {
                            this.video.play();
                            this.audio.play();
                            this.elements.play_and_pause.forEach((item_all) => {
                                item_all.querySelector('i').classList.value = 'fal fa-pause';
                            });
                        }
                    });
                });
            }
        } else {
            if (this.is_autoplay) {
                let video_url = el_item.dataset.videoUrl;
                let video_type = el_item.dataset.videoType;
                let video_autoplay = el_item.dataset.autoplay;
                let audio_url = el_item.dataset.audioUrl;
                let video_name = el_item.dataset.name;
                let video_voice = el_item.dataset.voice;
                let video_id = el_item.dataset.videoId;

                this.video_id = video_id;


                this.video.pause();

                this.elements.play_and_pause.forEach((item_all) => {
                    item_all.querySelector('i').classList.value = 'fal fa-play';
                });

                source.setAttribute('src', video_url);
                source.setAttribute('type', video_type);
                this.video.load();

                this.audio.src = audio_url;
                this.audio.load();

                // this.setters.name.textContent = video_name;
                // this.setters.voice.textContent = video_voice;

                if (video_autoplay == 'on') {
                    this.video.play();
                    this.audio.play();
                    this.elements.play_and_pause.forEach((item_all) => {
                        item_all.querySelector('i').classList.value = 'fal fa-pause';
                    });
                }
            }
        }
    }

    continueScreen() {
        if (this.elements.html_player.dataset.continue === 'off') {
            this.elements.html_player.querySelector('.continue-screen').style.display = 'none';
        }

        this.elements.continue_screen.forEach((item, i) => {
            item.addEventListener('click', () => {
                this.setVideoTime(item.dataset.time);
                this.setAduioTime(item.dataset.time);

                this.video.play();
                this.audio.play();

                this.elements.html_player.querySelector('.continue-screen').style.display = 'none';

                this.elements.play_and_pause.forEach((item_all) => {
                    item_all.querySelector('i').classList.value = 'fal fa-pause';
                });
            });
        });
    }

    skipScreen() {
        let is_skip = false;

        setInterval(() => {

            this.elements.play_and_pause.forEach((item_all) => {
                if (item_all.querySelector('i').classList.value !== 'fal fa-play') {
                    let time_sec = this.elements.button_skip_screen.dataset.timeSec;

                    if (this.video.currentTime < time_sec) {
                        //
                        this.elements.button_skip_screen.style.display = 'block';
                    } else {
                        this.elements.button_skip_screen.style.display = 'none';
                    }
                } else {
                    this.elements.button_skip_screen.style.display = 'none';
                }
            });

            // if (!is_skip) {
                if (this.is_autoskip) {

                    if (this.video.currentTime < this.elements.button_skip_screen.dataset.timeSec) {
                        this.video.currentTime = this.elements.button_skip_screen.dataset.timeSec;
                        this.audio.currentTime = this.elements.button_skip_screen.dataset.timeSec;
                    }
                }
            // }
        });

        this.elements.button_skip_screen.addEventListener('click', () => {
            this.video.currentTime = this.elements.button_skip_screen.dataset.timeSec;
            this.audio.currentTime = this.elements.button_skip_screen.dataset.timeSec;
        });
    }

    picInPic() {
        this.elements.pic_in_pic.addEventListener('click', () => {
            if (document.pictureInPictureElement) {
                document.exitPictureInPicture()
                .then(() => { /**/ })
                .catch(() => { /**/ });
            } else {
                this.video.requestPictureInPicture()
                .then(() => { /**/ })
                .catch(() => { /**/ });
            }
        });
    }

    changeVoice() {
        this.elements.change_voices.forEach((item, i) => {
            item.addEventListener('click', () => {
                let audio_url = item.dataset.audioUrl;

                this.elements.dropdowns.forEach((item_all) => {
                    let list_open = item_all.querySelector('ul.open');

                    if (list_open) {
                        list_open.classList.remove('open');
                    }
                });

                this.audio.src = audio_url;
                this.audio.load();
                this.setAduioTime(this.video.currentTime);

                this.setters.voice = item.dataset.voice;

                if (this.elements.play_and_pause[0].querySelector('i').classList.value === 'fal fa-pause') {
                    this.audio.play();
                }
            });
        });
    }


    fullscreen() {
        this.elements.button_fullscreen.addEventListener('click', () => {
            let is_fullscreen = this.elements.container_player.classList.contains('fullscreen');

            if (!is_fullscreen) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
                    document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
                    document.documentElement.msRequestFullscreen();
                }

                this.elements.container_player.classList.add('fullscreen');
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) { /* Safari */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE11 */
                    document.msExitFullscreen();
                }

                this.elements.container_player.classList.remove('fullscreen');
            }
        });
    }

    playlistShowHide() {
        this.elements.playlist_show_hide.addEventListener('click', () => {

            if (this.elements.playlist.style.display === 'block') {
                this.elements.playlist.style.display = 'none';

            } else {
                this.elements.playlist.style.display = 'block';
            }

            this.elements.playlist_show_hide.parentElement.classList.toggle('show');
        });
    }
    autoPlay() {
        if(document.getElementById('one').checked = false){
                this.is_autoplay = false;
                document.getElementById('one').checked = false;
                this.elements.button_autoplay.textContent =  'Включить автовоспроизведение';
        } else {
            this.is_autoplay = true;
            this.elements.button_autoplay.textContent = 'Выключить автовоспроизведение';
            document.getElementById('one').checked = true;
        }
        this.elements.button_autoplay.addEventListener('click', () => {
            if (this.is_autoplay) {
                this.is_autoplay = false;
                document.getElementById('one').checked = false;
                this.elements.button_autoplay.textContent =  'Включить автовоспроизведение';
            } else {
                this.is_autoplay = true;
                document.getElementById('one').checked = true;
                this.elements.button_autoplay.textContent = 'Выключить автовоспроизведение';
            }
        });
    }

    autoSkip() {
        if(document.getElementById('two').checked = false){
            this.is_autoplay = false;
            document.getElementById('two').checked = false;
            this.elements.button_autoskip.textContent = 'Включить пропуск заставки';
        } else {
            this.is_autoplay = true;
            this.elements.button_autoskip.textContent = 'Выключить пропуск заставки';
            document.getElementById('two').checked = true;
        }
        this.elements.button_autoskip.addEventListener('click', () => {
            if (this.is_autoskip) {
                this.is_autoskip = false;
                document.getElementById('two').checked = false;
                this.elements.button_autoskip.textContent = 'Включить пропуск заставки';
            } else {
                this.is_autoskip = true;
                document.getElementById('two').checked = true;
                this.elements.button_autoskip.textContent = 'Выключить пропуск заставки';
            }
        });
    }

    handler() {
        /** Скрыть панели **/
        this.showHideIntefrace();

        /** Воспроизведение / пауза **/
        this.playAndPause();

        /** Перемотка **/
        this.revindVideo();

        /** Обновление полосы проигрывания видео **/
        setInterval(() => {
            this.updateVideoLine();
        }, 1000);

        /** Управление звуком  **/
        this.updateVideoVolume();

        /** Плейлисты - переключение видео **/
        this.playlistChangeVideo();
        this.changeSeries();

        /** Картинка в картинке **/
        this.picInPic();

        /** Смена озвучки **/
        this.changeVoice();

        /** Вывод сообщения вы остановились на 20:29... **/
        this.continueScreen();

        /** Пропуск заставки **/
        this.skipScreen();

        /** Полноэеранный режим **/
        this.fullscreen();

        /** Показать скрыть плейлист **/
        this.playlistShowHide();

        /** Автовоспроизведение **/
        this.autoPlay();

        /** Автопропуск заставки **/
        this.autoSkip();

        /** Выпвлающие списки **/
        let is_dropdown_open = false;
        this.elements.dropdowns.forEach((item, i) => {
            item.querySelector('button').addEventListener('click', () => {
                this.elements.dropdowns.forEach((item_all) => {
                    let list_open = item_all.querySelector('ul.open');

                    if (list_open) {
                        list_open.classList.remove('open');
                    }
                });

                let list = item.querySelector('ul');

                try {
                    if (list.classList.contains('open')) {
                        list.classList.remove('open');
                    } else {
                        list.classList.add('open');
                    }
                } catch (e) {

                }

                is_dropdown_open = true;
            });
        });

        this.elements.container_player.addEventListener('mouseup', () => {
            this.elements.dropdowns.forEach((item_all) => {
                let list_open = item_all.querySelector('ul.open');

                if (list_open) {
                    list_open.classList.remove('open');
                }
            });
        });
    }
}

let my_player;

setTimeout(() => {
    my_player = new Player();
    my_player.handler();
}, 1000);



