(function ($) {
    $.fn.ifrontierSelect = function ( obj, changeHandle, callBackbool ) {
        var _self = this;
        var target = $(this);           //  目标节点
        target.empty();                 //  清空目标节点
        var label_name = '';            //  选择框名字
        var label_html = '';            //  选择框名字dom节点
        obj.name = $.trim(obj.name);    //  字符串去空
        // 选择框名字赋值
        if( obj.name || obj.name == '' ) {
            label_name = obj.name == '' ? '默认' : obj.name + '';
            label_html = '<label class="cpn-form-label floatL" style="margin-right: 5px;">' + label_name + '</label>';
        }

        //  选择框宽度设置，最小限制60px，最大无限
        obj.width = Number( obj.width );
        obj.width = obj.width == 0 ? obj.width = 200 : obj.width;
        if( obj.width ) {
            obj.width = obj.width < 60 ? obj.width = 60 : obj.width;
        }

        var options_html = '';      // 选择框内容
        $.each( obj.options, function ( index, item ) {
            options_html += '<li><a href="javascript:void(0)">' + item + '</a></li>';   // 选择框内容html
        });
        //  选择框对象（包含样式自定义）
        var selectObj = $('<div class="cpn-main-box"> <div class="cpn-form-box"> <div class="cpn-form-group cpn-form-clearH floatL">'
            + label_html + '<div class="cpn-form-select floatL" style="font-size: 14px;"> <div class="cpn-form-icon"><i></i></div> <input type="text" readonly class="cpn-form-input" style="width: '
            + obj.width + 'px;"/> <ul style="width: '
            + obj.width + 'px; z-index: 99999;" >'
            + options_html + '</ul> </div> </div> </div> </div>');

        target.append( selectObj );     //  给目标节点添加内容

        function selectReflash() {
            var $yearInput = $( '.cpn-form-select .cpn-form-input', _self );
            $yearInput.val( $( '.cpn-form-select ul a:first', _self ).text() );

            if( typeof changeHandle === 'function' && callBackbool ){ // 判断callback是否是函数
                changeHandle($( '.cpn-form-select ul a:first', _self ).text()); //默认回调第一个值
            }

            $( '.cpn-form-select .cpn-form-input', _self ).on( 'click', function () {
                var $ul =  $( this ).parent().find( 'ul' );
                $ul.toggle();
                if( $ul.is(':visible') ) {
                    $( this ).parent().addClass( 'select-active' );
                } else {
                    $( this ).parent().removeClass( 'select-active' );
                }
            });

            $( '.cpn-form-select .cpn-form-icon', _self ).on( 'click', function () {
                var $ul =  $( this ).parent().find( 'ul' );
                $ul.toggle();
                if( $ul.is(':visible') ) {
                    $( this ).parent().addClass( 'select-active' );
                } else {
                    $( this ).parent().removeClass( 'select-active' );
                }
            });
            $( '.cpn-form-select ul a', _self ).on( 'click', function () {
                $( this ).parents( '.cpn-form-select' ).removeClass( 'select-active' );
                $yearInput.val( $( this ).text() );
                $( this ).parents( 'ul' ).hide();

                if(typeof changeHandle === 'function') { // 判断callback是否是函数
                    changeHandle($(this).text());
                }
            });
        }
        selectReflash();
        $( document ).on( 'click', function ( evt ) {
            var target = evt.target;
            if( $( target ).parents( _self.selector ).length < 1 ) {
                $( '.cpn-form-select ul', _self ).hide();
                $( '.cpn-form-select', _self ).removeClass( 'select-active' );
            }
        });
    }

    //  调用方法
    $.fn.ifrontierSelect.methods = {
        reflash: function () {
            alert(1)
        }
    }
})(jQuery);



