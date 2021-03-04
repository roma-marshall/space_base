page = PAGE

## favicon
page.shortcutIcon = EXT:space_base/Resources/Public/Icons/favicon.ico

## css
page.includeCSS {
    10 = EXT:space_base/Resources/Public/css/style.css

    20 = EXT:space_base/Resources/Public/bootstrap-4.3.1/css/bootstrap.css

    30 = EXT:space_base/Resources/Public/bootstrap-4.3.1/css/bootstrap.min.css
}

## jquery
page.includeJSFooterlibs {
    10 = http://code.jquery.com/jquery-3.4.0.min.js
    10.external = 1
    10.disableCompression = 1
}

## js
page.includeJSFooter {
    10 = EXT:space_base/Resources/Public/bootstrap-4.3.1/js/bootstrap.js

    20 = EXT:space_base/Resources/Public/bootstrap-4.3.1/js/bootstrap.min.js
    20.disableCompression = 1
}

page.10 = FLUIDTEMPLATE
page.10 {

    layoutRootPath = EXT:space_base/Resources/Private/Layouts/

    file = EXT:space_base/Resources/Private/Templates/Default.html

    variables {

        content0 = CONTENT
        content0 {
            table = tt_content
            select.where = colPos = 0
            select.orderBy = sorting
        }

        content1 < .content0
        content1.select.where = colPos=1

        content2 < .content0
        content2.select.where = colPos=2

    }

}