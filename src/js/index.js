var Card = Composer.Controller.extend({
    name: 'TK-CARD',
    class_name: 'tk-card hoverable',
    init: function() {
        this.render();
    },
    render: function() {
        this.html('<div class="tk-divider tk-title">'+this.name+'</div>')
    }
});

var CardTray = Composer.Controller.extend({
    class_name: 'tk-card tk-section',
    name: 'none',
    init: function() {
        this.render();
    },
    render: function() {
        this.html("<div class='tk-divider tk-title'>"+this.name+"</div><div class='tk-cardtray'></div>")
    }
});

var Button = Composer.Controller.extend({
    class_name: '',
    name: 'none',
    btn_type:'',
    init: function() {
        this.render();
    },
    render: function() {
        this.html("<input type='button' class='tk-btn "+this.btn_type+"' value='button'>")
    }
});
var card = new Card({inject:'#app', class_name:'tk-card'});
var hoverable_card = new Card({inject:'#app', name: 'tk-card hoverable',class_name:'tk-card hoverable'});
var cardTray = new CardTray({inject:"#app", name: 'Tk-tray'});
var cardInTray = new Card({inject:'.tk-cardtray', name: 'card in tray'});
var cardInTray2 = new Card({inject:'.tk-cardtray', name: 'Card in tray'});
var cardInTray3 = new Card({inject:'.tk-cardtray', name: 'Card in tray'});

var buttonsCard = new Card({inject:'#app',class_name:'tk-card button-card', name: 'tk-buttons'})
var button = new Button({inject:'.button-card'});
var button_primary = new Button({inject:'.button-card', btn_type: 'primary'});
var button_secondary = new Button({inject:'.button-card', btn_type:'secondary'});
var button_danger = new Button({inject:'.button-card', btn_type:'danger'});
var button_warning = new Button({inject:'.button-card', btn_type:'warning'});
