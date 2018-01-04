/*内容管理对象 */

var H5 = function(){
    this.id = ('h5_'+Math.random()).replace('.','_');
    this.el = $('<div class="h5" id="'+this.id+'">').hide();
    this.page=[];
    $('body').append(this.el);

    //新增一个页
    //name 组件的名称，会加入到ClassName中，
    //text 页内的默认文本
    this.addPage = function(name,text){
        var page = $('<div class="h5_page section">');

        if(name !=undefined){
            page.addClass('h5_page_'+name);
        }
        if(text != undefined){
            page.text(text);
        }
        this.el.append(page);
        this.page.push(page);
        return this;
    }
    //新增一个组件
    this.addComponent = function(name,cfg){
        var cfg = cfg || {};
        cfg = $.extend({
            type: 'base'
        },cfg);
        var component;  
        var page = this.page.slice(-1)[0];//定义一个变量，存储 组件元素
        switch(cfg.type){
            case 'base':
                component = new H5ComponentBase(name,cfg);
                break;
                default:
        }
        page.append(component);
        return this;
    }
    // H5对象初始化呈现
    this.loader = function(){
        this.el.fullpage();
        this.el.show();
    }
    return this;
}