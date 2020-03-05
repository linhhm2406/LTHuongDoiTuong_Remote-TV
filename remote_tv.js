let Remote = function (model) {
    this.model = model;

    this.remote = function (tivi, number) {
        tivi.changeChannel(number)
    };
    this.setStatus = function (tivi,value) {
      tivi.setStatus(value);
    }
};

DEFAULT_VOLUME = 10;
DEFAULT_CHANNEL = 1;

let Tivi = function (status) {

    this.recentChannel = DEFAULT_CHANNEL;

    this.getRecentChannel = function () {
        return this.recentChannel;
    };

    this.recentVolume = DEFAULT_VOLUME;
    this.getRecentVolume = function () {
        return this.recentVolume;
    };
    this.setVolumeUp = function (number) {
        this.recentVolume = this.recentVolume + number;
    };

    this.status = status;

    this.setStatus = function (value) {
        this.status = value;
    };

    this.changeChannel = function (channel_number) {
        this.recentChannel = channel_number;
    };
};

let remote = new Remote('samsung');
let tivi = new Tivi('Off');

function tvOn_manual() {
    tivi.setStatus('ON');
    alert('TV ON')
}

function tvOff_manual() {
    tivi.setStatus('OFF');
    alert('TV OFF')
}

function changeChannelManual(number) {
    if (tivi.status === 'ON') {
        number = prompt('Chon kenh');
        tivi.changeChannel(number);
        alert(tivi.recentChannel);
    }
}

function changeChannelRemote() {
    if (tivi.status === 'ON') {
        let number = prompt('Chon kenh');
        remote.remote(tivi, number);
        alert(tivi.recentChannel);
    }
}

function volumeUpManual() {
    if (tivi.status === 'ON') {
        alert("Recent Volume : " + tivi.recentVolume);
        tivi.setVolumeUp(2);
        alert("Volume Up -> Recent Volume : " + tivi.recentVolume);
    }
}

function tV_Off_remote(){
    remote.setStatus(tivi,"OFF");
    alert(tivi.status);
}