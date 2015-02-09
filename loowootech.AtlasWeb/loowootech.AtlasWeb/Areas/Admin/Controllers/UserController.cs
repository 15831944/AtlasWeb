﻿using loowootech.AtlasWeb.Helper;
using loowootech.AtlasWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace loowootech.AtlasWeb.Areas.Admin.Controllers
{
    public class UserController : AdminControllerBase
    {
        public ActionResult Index(GroupFilter GroupFilter=GroupFilter.All,int page=1) {
            var filter = new UserFileter()
            {
                Group = GroupFilter,
                Page = new Page(page)
            };
            ViewBag.Page = filter.Page;
            ViewBag.List = Core.UserManager.GetUsers(filter);
            ViewBag.Maps = Core.MapManager.GetMaps();
            return View();
        }

        [HttpPost]
        public ActionResult Add(User user) {
            var Check = Core.UserManager.GetUser(user.Name);
            if (Check != null) {
                throw new ArgumentException("该用户名已经注册了！请重新选择用户名");
            }
            if (!Core.UserManager.Add(user)) {
                throw new ArgumentException("添加用户失败！");
            }
            return RedirectToAction("Index");
        }

        public ActionResult Delete(int ID) {
            var user = Core.UserManager.GetUser(ID);
            if (user == null) {
                throw new ArgumentException("未找到该用户相关信息！");
            }
            if (!Core.UserManager.Delete(ID)) {
                throw new ArgumentException("删除用户失败！");
            }
            return RedirectToAction("Index");
        }

        [HttpPost]
        public ActionResult Edit(User user, string repassword) {
            var entity = Core.UserManager.GetUser(user.ID);
            if (entity == null) {
                throw new ArgumentException("未找到编辑用户相关信息!");
            }
            if (string.IsNullOrEmpty(user.Name)) {
                throw new ArgumentException("用户名不能为空！");
            }
            if (string.IsNullOrEmpty(user.Password))
            {
                if (!Core.UserManager.Edit(user.Name, user.Group, user.ID))
                {
                    throw new ArgumentException("更改用户权限失败");
                }
            }
            else {
                if (user.Password != repassword) {
                    throw new ArgumentException("输入两次不一致！");
                }
                if (!Core.UserManager.Edit(user)) {
                    throw new ArgumentException("编辑用户失败!");
                }
            }
            return RedirectToAction("Index");
        }

    }
}