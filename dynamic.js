const dynamic = require('dynamic')
const { DYNAMIC } = dynamic;
const domHtml = new DYNAMIC(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <!-- Bootswatch theme -->
    <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css">
    <!-- font awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
</head>
<body>
    <div class="black-square"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-8 m-auto">
                <div id="app-div" class="mt-5">
                    <div id="forTitle" class="d-flex flex-row justify-content-between align-items-center px-2 app-item">
                        <h4 class="m-0">Today's To Do</h4>
                        <a href="#" id="titleIcon">
                            <i class="fas fa-sync-alt p-2"></i>
                        </a>
                    </div>
                    <div id="forForm" class="">
                        <form action="submit" id="addTask" class="d-flex flex-row justify-content-between align-items-center px-2 app-item">
                            <input type="text" id="taskDesc" placeholder="Add to your list" class="form-control">
                            <a href="#" id="clickEnterIcon">
                                <i class="fas fa-sign-in-alt p-2"></i>
                            </a>
                        </form>
                    </div>
                    <div id="forList" class="container-fluid p-0">
                        <ul id="task-list" class="p-0 m-0 d-flex flex-column "></ul>
                    </div>
                    <div id="forButton" class="bottom-btn d-flex justify-content-center align-items-center">
                        <a href="#" id="clear-comp">Clear all completed tasks</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="black-square footer"></div>
</body>
</html>`, {url: 'https://localhost/'});
global.document = domHtml.window.document;
global.window = domHtml.window;
exports.globaldocument = global.document;